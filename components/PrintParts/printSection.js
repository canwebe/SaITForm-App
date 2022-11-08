import s from '../../styles/Check.module.css'

export default function PrintSection({ children, title, low }) {
  return (
    <div className={`${s.printSection} ${low ? 'low' : ''}`}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
