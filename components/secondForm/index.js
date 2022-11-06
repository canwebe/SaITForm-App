import FormSection from '../formSection'
import ParentsInformation from '../formParts/ParentsInformation'
import styles from './secondForm.module.css'
import CourseInformation from '../formParts/CourseInformation'
import EducationInformation from '../formParts/EducationInformation'
import PersonalInformation from '../formParts/PersonalInformation'

export default function SecondForm({ name, mobile }) {
  return (
    <form className={styles.form}>
      <p className={styles.bio}>
        Name : <span className={styles.name}>{name}</span> , &nbsp;&nbsp; Mobile
        No : <span className={styles.mobile}>{mobile}</span>
      </p>

      <PersonalInformation />
      <EducationInformation />
      <CourseInformation />
      <ParentsInformation />
    </form>
  )
}
