import FormSection from '../formSection'
import ParentsInformation from '../formParts/ParentsInformation'
import styles from './secondForm.module.css'
import CourseInformation from '../formParts/CourseInformation'
import EducationInformation from '../formParts/EducationInformation'
import PersonalInformation from '../formParts/PersonalInformation'
import { useFullData } from '../../contexts/fullDataContext'
import PhotoUploadParts from '../formParts/PhotoUploadParts'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SecondForm({ name, mobile }) {
  const [isClick, setIsClick] = useState(false)

  const router = useRouter()

  const state = useFullData()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/check')
  }
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
