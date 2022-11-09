import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Link from 'next/link'
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
import { addFullData } from '../helper/firebase'
import { storage } from '../lib/firebase'
import s from '../styles/Check.module.css'
import uuid4 from 'uuid4'

export default function Check() {
  const router = useRouter()
  const print = router.query.print

  const [isFinalize, setIsFinalize] = useState(print || false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const printRef = useRef()
  const { mobile, caste } = useFullData()

  // Getting Data
  const { file, dispatch, ...data } = useFullData()

  const handleUpload = async (docId, id) => {
    const uploadTask = uploadBytesResumable(
      ref(storage, 'students/' + docId),
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
          },
          docId
        )
        if (res) {
          toast.success(<b>Upload done</b>, { id })
          setIsFinalize(true)
        } else {
          throw new Error('ALreday uploaded data found')
        }
        setIsLoading(false)
        setProgress(0)
      }
    )
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

  useEffect(() => {
    if (!mobile) {
      router.push('/')
    }
  }, [mobile, router])

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
              Back and Edit
            </button>
            <button disabled={isLoading} onClick={handleClick}>
              {isLoading ? 'Uploading' : 'Finalize and Submit'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
