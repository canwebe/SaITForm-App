import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import ReactToPrint from 'react-to-print'
import CourseSection from '../components/PrintParts/courseSection'
import DeclarationScSt from '../components/PrintParts/declarationScSt'
import DeclarationStudent from '../components/PrintParts/declarationStudent'
import EducationInfo from '../components/PrintParts/educationInfo'
import Header from '../components/PrintParts/header'
import ParentsSection from '../components/PrintParts/parentsSection'
import StudentInfo from '../components/PrintParts/studentInfo'
import { useFullData } from '../contexts/fullDataContext'
import { addFullData, deleteStudent } from '../helper/firebase'
import { storage } from '../lib/firebase'
import s from '../styles/Check.module.css'
import uuid4 from 'uuid4'
import { MdBorderColor, MdCheckCircleOutline } from 'react-icons/md'

export default function Check() {
  const router = useRouter()
  const print = router.query.print

  const [isFinalize, setIsFinalize] = useState(print || false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const printRef = useRef()
  // Getting Data
  const {
    mobile,
    caste,
    file,
    dispatch,
    id: studentId,
    ...data
  } = useFullData()

  const handleUpload = async (docId, id) => {
    const fileRef = data?.name?.trim().toLowerCase() + mobile?.trim()
    const uploadTask = uploadBytesResumable(
      ref(storage, 'students/' + fileRef),
      file
    )
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const p = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(p)
      },
      (error) => {
        // Handle unsuccessful uploads
        toast.error(<b>{error?.message}</b>, { id })
        setIsLoading(false)
        setProgress(0)
      },
      async () => {
        // Handle successful uploads on complete
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        const res = await addFullData(
          {
            ...data,
            name: data.name.trim().toLowerCase(), //Triming white space and lowercase for searching
            mobile: mobile.trim(), //Triming white space for searching
            imgSrc: url, // Photo url
            caste,
          },
          docId
        )
        if (res) {
          toast.success(<b>Upload done</b>, { id })
          setIsFinalize(true)
        } else {
          throw new Error('Alreday uploaded data found')
        }
        setIsLoading(false)
        setProgress(0)
      }
    )
  }

  const handleAdminDlt = async () => {
    const isConfirm = prompt(
      `Are you sure you want to delete ${data.name} data? Type 'DELETE' to confirm :`
    )
    if (isConfirm?.trim()?.toLowerCase() === 'delete') {
      setIsLoading(true)
      const toastId = toast.loading(<b>Deleting please wait!</b>)
      try {
        await deleteStudent(studentId)
        toast.success(<b>Deleted successfully</b>, { id: toastId })
      } catch (error) {
        console.log(error.message)
        toast.error(<b>{error.message}</b>, { id: toastId })
      }
      setIsLoading(false)
    } else {
      toast.error('Canceled delete Request!')
    }
  }

  const handleClick = async () => {
    setProgress(5)
    setIsLoading(true)
    const id = toast.loading(<b>Uploading Data...</b>)
    try {
      const docId = uuid4()
      handleUpload(docId, id)
    } catch (error) {
      console.log(error)
      toast.error(<b>{error.message}</b>, { id })
      setIsLoading(false)
      setProgress(0)
    }
  }

  const handleHomeBtn = () => {
    router.push('/')
    dispatch({ type: 'RESET' })
  }

  const handleAdminBack = async () => {
    router.push('/admin')
  }

  useEffect(() => {
    if (!mobile) {
      router.push('/')
    }
  }, [mobile])

  return (
    <div className={s.body}>
      <div ref={printRef} className={s.formCard}>
        {/* Page 1 */}
        <>
          <Header />
          <StudentInfo />
          <EducationInfo />
        </>
        <div className={s.page_break} />

        {/* Page 2 */}
        <>
          <CourseSection />
          <ParentsSection />
          <DeclarationStudent />
          {caste === 'sc' || caste === 'st' ? <DeclarationScSt /> : null}
        </>
      </div>
      <div className={s.bottomBtnDiv}>
        {isFinalize ? (
          studentId ? ( //If Admin Check Data
            <>
              <button
                className={s.greyBtn}
                disabled={isLoading}
                onClick={handleAdminBack}
              >
                Back
              </button>
              <button onClick={() => router.push('/form')} disabled={isLoading}>
                Edit
              </button>
              <button
                className={s.backBtn}
                disabled={isLoading}
                onClick={handleAdminDlt}
              >
                {isLoading ? 'Loading' : 'Delete'}
              </button>
              <ReactToPrint
                documentTitle={`Form_S1_${data?.mobile}`}
                trigger={() => (
                  <button className={s.printBtn}>Print this out!</button>
                )}
                content={() => printRef.current}
              />
            </>
          ) : (
            // Normal Student View
            <>
              <button className={s.homeBtn} onClick={handleHomeBtn}>
                Home
              </button>
              <ReactToPrint
                documentTitle={`Form_S1_${data?.mobile}`}
                trigger={() => (
                  <button className={s.printBtn}>Print this out!</button>
                )}
                content={() => printRef.current}
              />
            </>
          )
        ) : (
          <>
            {progress > 0 ? (
              <div className={s.progressDiv}>
                <div
                  style={{ width: progress + '%' }}
                  className={s.progressBar}
                />
              </div>
            ) : null}

            <button
              className={s.backBtn}
              disabled={isLoading}
              onClick={() => router.back()}
            >
              <MdBorderColor />
              Back and Edit
            </button>
            <button disabled={isLoading} onClick={handleClick}>
              {isLoading ? (
                'Uploading'
              ) : (
                <>
                  Finalize and Submit
                  <MdCheckCircleOutline />
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
