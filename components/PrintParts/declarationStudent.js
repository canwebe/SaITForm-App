import { useFullData } from '../../contexts/fullDataContext'
import s from '../../styles/Check.module.css'

export default function DeclarationStudent() {
  const { name, degree, course, branch } = useFullData()

  return (
    <div className={s.declarationDiv}>
      <h2>Declaration by Student</h2>
      <p className={s.info}>
        I, <span className={s.upperName}>{name}</span> The candidate seeking
        admission to the Sambhram Institute Of Technology, Bangalore{' '}
        <span className={s.course}>{`${degree} ${course} ${
          branch || ''
        }`}</span>{' '}
        Course, solemnly declare that I will strictly abide by the rules and
        regulations in force and those that may be framed hereafter, and will
        not indulge in any unsocial, anti-national activities. I will avoid any
        act of indiscipline and breach of rules. I further agree to reimburse
        any damage of furniture, apparatus etc. which may be caused by
        carelessness or wantonness on my part. I will fulfill all the academic
        essentials laid by the college. The college is free to take actions on
        me in case of any violations from any side.
      </p>
      <div className={s.bottomDiv}>
        <p>Date:</p>
        <p>Signature of Student</p>
        <p>Signature of Parent/Guardian</p>
      </div>
    </div>
  )
}
