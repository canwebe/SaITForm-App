import styles from './secondForm.module.css'

export default function SecondForm({ data }) {
  const { name, mobile } = data
  return (
    <form className={styles.form}>
      <p className={styles.bio}>
        Name : <span className={styles.name}>{name}</span> , &nbsp;&nbsp; Mobile
        No : <span className={styles.mobile}>{mobile}</span>
      </p>
      <div className={styles.formDiv}>
        <label>Date Of Birth</label>
        <input type="date" placeholder="Your name" />
      </div>
    </form>
  )
}
