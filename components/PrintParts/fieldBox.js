import s from '../../styles/Check.module.css'

export default function FieldBox({ children, label }) {
  return (
    <div className={s.fieldBox}>
      <span>{label} :</span>
      {children}
    </div>
  )
}
