import styles from './formDiv.module.css'

export default function FormDiv({ children, title }) {
  return (
    <div className={styles.formDiv}>
      {children}
      <label>{title}</label>
    </div>
  )
}
