import dynamic from 'next/dynamic'
import s from '../styles/Login.module.css'
const LoginForm = dynamic(() => import('../components/loginForm'))

export default function Login() {
  return (
    <div className={s.loginWrapper}>
      <LoginForm />
    </div>
  )
}
