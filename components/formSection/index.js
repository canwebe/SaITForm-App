import styles from './formSection.module.css'

export default function FormSection({ children, title }) {
  return (
    <div className={styles.body}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
