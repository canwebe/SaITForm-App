import ParentsInformation from '../components/formParts/ParentsInformation'
import styles from '../styles/Form.module.css'
import CourseInformation from '../components/formParts/CourseInformation'
import EducationInformation from '../components/formParts/EducationInformation'
import PersonalInformation from '../components/formParts/PersonalInformation'
import { useFullData } from '../contexts/fullDataContext'
import PhotoUploadParts from '../components/formParts/PhotoUploadParts'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default function Form() {
  const [isClick, setIsClick] = useState(false)

  const { name, mobile, imgSrc, id, ...data } = useFullData()

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!imgSrc) {
      toast.error(<b>Please provide your image</b>)
      return
    }
    router.push('/check')
  }

  useEffect(() => {
    if (!name || !mobile) {
      router.push('/')
    }
  }, [name, mobile])

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${isClick ? 'clicked' : ''}`}
    >
      <p className={styles.bio}>
        Name : <span className={styles.name}>{name}</span> , &nbsp;&nbsp; Mobile
        No : <span className={styles.mobile}>{mobile}</span>
      </p>

      <PersonalInformation />
      <EducationInformation />
      <CourseInformation />
      <ParentsInformation />
      <PhotoUploadParts setIsClick={setIsClick} />
    </form>
  )
}
