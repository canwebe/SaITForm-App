import styles from './formDiv.module.css'

export default function FormDiv({ children, title }) {
  return (
    <div className={styles.formDiv}>
      <label>{title}</label>
      {children}
    </div>
  )
}
