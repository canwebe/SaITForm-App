import s from '../../../styles/Admin.module.css'
import Button from '../../Button'

export default function TopBar({ handleData, isLoading, size }) {
  return (
    <div className={s.topBar}>
      <div className={s.userInfo}>
        <Button disabled={isLoading} onClick={handleData} type="primary wide">
          {isLoading
            ? 'Getting Data'
            : size > 0
            ? 'Refresh Data'
            : 'Get Students Data'}
        </Button>
        {size ? (
          <p className={s.totalStudents}>Total Students Found : {size}</p>
        ) : null}
      </div>

      <div className={s.userInfo}>
        <p className={s.userName}>Admin Name</p>
        <Button disabled={isLoading} onClick={() => alert('click')} type="red">
          Logout
        </Button>
      </div>
    </div>
  )
}
