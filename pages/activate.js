import LoginForm from '../components/loginForm'
import s from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={s.loginWrapper}>
      <LoginForm />
    </div>
  )
}
