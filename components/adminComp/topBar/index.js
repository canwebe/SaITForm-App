import s from '../../../styles/Admin.module.css'
import Button from '../../Button'

export default function TopBar() {
  return (
    <div className={s.topBar}>
      <Button onClick={() => alert('click')} type="primary wide">
        Get Students Data
      </Button>
      <div className={s.userInfo}>
        <p className={s.userName}>Admin Name</p>
        <Button onClick={() => alert('click')} type="red">
          Logout
        </Button>
      </div>
    </div>
  )
}
