import { useRef } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../../contexts/authContext'
import s from '../../../styles/Admin.module.css'
import Button from '../../Button'

export default function TopBar({ handleData, isLoading, size }) {
  const userRef = useRef()
  const passRef = useRef()
  const { admin, user, dispatch } = useAuth()

  const signin = () => {
    if (!user) {
      toast.error(<b>This system is not activated. Contact CWB Team!</b>)
      return
    }
    const username = userRef.current?.value
    const password = passRef.current?.value

    if (userRef.current.value === '' || passRef.current.value === '') {
      toast.error(<b>Do not left empty</b>)
      return
    }
    if (
      username.trim().toLowerCase() === process.env.NEXT_PUBLIC_ADMIN_USER &&
      password.trim().toLowerCase() === process.env.NEXT_PUBLIC_ADMIN_PASS
    ) {
      localStorage.setItem(
        'admin',
        JSON.stringify(user?.refreshToken || 'admin_user ')
      )
      dispatch({
        type: 'ADMIN_LOGIN',
        payload: user?.refreshToken || 'admin_user ',
      })
      toast.success(<b>Login successfull</b>)
    } else {
      toast.error(<b>Wrong data, Please Try Again!</b>)
    }
    userRef.current.value = ''
    passRef.current.value = ''
  }

  const logout = () => {
    localStorage.removeItem('admin')
    dispatch({ type: 'ADMIN_LOGOUT' })
  }
  console.log(admin, 'admin')

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
      {admin ? (
        <div className={s.userInfo}>
          <p className={s.userName}>Admin</p>
          <Button disabled={isLoading} onClick={logout} type="red">
            Logout
          </Button>
        </div>
      ) : (
        <div className={s.userInfo}>
          <input ref={userRef} type="text" placeholder="Enter Username" />
          <input ref={passRef} type="password" placeholder="Enter password" />
          <Button disabled={isLoading} onClick={signin} type="primary">
            Login
          </Button>
        </div>
      )}
    </div>
  )
}
