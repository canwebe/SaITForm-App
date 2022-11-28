import FormSection from '../../formSection'
import s from './photoUpload.module.css'
import avatar from '../../../public/assets/user.webp'
import Image from 'next/image'
import { useFullData } from '../../../contexts/fullDataContext'
import toast from 'react-hot-toast'
import { MdArrowForward } from 'react-icons/md'
import { useRouter } from 'next/router'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../lib/firebase'
import { useState } from 'react'
import { updateStudent } from '../../../helper/firebase'

export default function PhotoUploadParts({ setIsClick }) {
  const [isLoading, setIsLoading] = useState(false)

  // routers
  const router = useRouter()

  const { dispatch, imgSrc, file, id, ...data } = useFullData()

  const acceptedTypes = ['image/png', 'image/jpeg']

  // Handle image change
  const handleChange = (e) => {
    const selected = e.target.files[0]
    if (!acceptedTypes.includes(selected?.type)) {
      toast.error(<b>Please select only JPEG or PNG format</b>)
      return
    }
    const url = URL.createObjectURL(selected)
    dispatch({ type: 'CHANGE_IMG', file: selected, url })
  }

  // Handle Upload Photo
  const handleUpload = async (docId, id) => {
    const fileRef = data?.name?.trim().toLowerCase() + data?.mobile?.trim()
    const uploadRef = ref(storage, 'students/' + fileRef)

    const snapshot = await uploadBytes(uploadRef, file)
    const url = await getDownloadURL(snapshot.ref)
    toast.success(<b>Done file uploading</b>, { id })
    setIsLoading(false)
  }

  // Handle Update Function
  const handleUpdate = async (e) => {
    e.preventDefault()
    if (!imgSrc) {
      toast.error(<b>Please provide your image</b>)
      return
    }
    try {
      setIsLoading(true)
      const toastId = toast.loading(<b>Updating please wait!</b>)
      if (file) {
        const fileRef = data?.name?.trim().toLowerCase() + data?.mobile?.trim()
        const uploadRef = ref(storage, 'students/' + fileRef)
        const snapshot = await uploadBytes(uploadRef, file)
        const url = await getDownloadURL(snapshot.ref)
        toast.success(<b>File uploading done</b>, { id: toastId })
        await updateStudent(id, {
          ...data,
          name: data.name?.trim().toLowerCase(), //Triming white space and lowercase for searching
          mobile: data.mobile?.trim(), //Triming white space for searching
          imgSrc: url, // Photo url
        })
      } else {
        await updateStudent(id, {
          ...data,
          name: data.name?.trim().toLowerCase(), //Triming white space and lowercase for searching
          mobile: data.mobile?.trim(), //Triming white space for searching
          imgSrc, // Photo url
        })
      }
      toast.success(<b>Successfully Updated</b>, { id: toastId })
      setIsLoading(false)
      router.push('/admin')
    } catch (error) {
      console.log(error.message)
      toast.error(<b>{error.message}</b>, { id: toastId })
    }
  }

  return (
    <FormSection title="Additional Information">
      <div className={s.photoDiv}>
        <div className={s.img}>
          <Image
            src={imgSrc || avatar}
            alt="Slected file"
            width={180}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={s.ulDiv}>
          <ul>
            <li>PLease give passport size photo</li>
            <li>Only image with JPEG, JPG and PNG Format</li>
            <li>File should be less than 500kb</li>
          </ul>
          <input
            accept="image/png,image/jpeg"
            onChange={handleChange}
            type="file"
            name="file"
          />
        </div>
      </div>
      {id ? (
        <div className={s.btnDiv}>
          <button disabled={isLoading} onClick={() => router.push('/admin')}>
            Back to Admin
          </button>
          <button onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? 'Updating' : 'Update'}
          </button>
        </div>
      ) : (
        <button
          className={s.nextBtn}
          onClick={() => setIsClick(true)}
          type="submit"
        >
          Next
          <MdArrowForward />
        </button>
      )}
    </FormSection>
  )
}
