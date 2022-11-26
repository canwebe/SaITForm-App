import s from '../../../styles/Admin.module.css'
import Button from '../../Button'

export default function TopBar({ handleData, isLoading }) {
  return (
    <div className={s.topBar}>
      <Button disabled={isLoading} onClick={handleData} type="primary wide">
        {isLoading ? 'Getting Data' : 'Get Students Data'}
      </Button>
      <div className={s.userInfo}>
        <p className={s.userName}>Admin Name</p>
        <Button disabled={isLoading} onClick={() => alert('click')} type="red">
          Logout
        </Button>
      </div>
    </div>
  )
}
