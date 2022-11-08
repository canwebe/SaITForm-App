import { useFullData } from '../../contexts/fullDataContext'
import s from '../../styles/Check.module.css'

export default function DeclarationScSt() {
  const { name } = useFullData()

  return (
    <div className={`${s.declarationDiv} ${s.high}`}>
      <h2>Declaration only by SC/ST Student</h2>
      <p></p>
      <p className={s.info}>
        I, <b>{name}</b> solemnly declare that I will apply for the SC/ST
        scholarship for all the four years in the concerned Social Welfare
        Department as per my eligibility and norms. I am solemnly responsible to
        pay all the four years CET and College fees if I do not apply for the
        SC/ST scholarship.
      </p>
      <div className={s.bottomDiv}>
        <p>Date:</p>
        <p>Signature of Student</p>
        <p>Signature of Parent/Gurdian</p>
      </div>
    </div>
  )
}
