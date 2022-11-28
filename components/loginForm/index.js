import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../contexts/authContext'
import { auth } from '../../lib/firebase'
import Button from '../Button'
import s from './loginForm.module.css'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { user, dispatch } = useAuth()

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const id = toast.loading(<b>Logging in please wait!</b>)
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      )
      if (res) {
        dispatch({ type: 'LOGIN', payload: res.user })
        toast.success(<b>Login successfull</b>, { id })
        setIsLoading(false)
        router.push('/')
      } else {
        throw new Error('Something went wrong try again')
      }
    } catch (error) {
      console.log(error.message)
      toast.error(<b>{error.message}</b>, { id })
      setIsLoading(false)
    }
  }

  const handleDeactivate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signOut(auth)
      dispatch({ type: 'LOGOUT' })
      setIsLoading(false)
      router.push('/')
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <p>Welcome to SaITForm</p>
      {user ? (
        <button className={s.red} onClick={handleDeactivate}>
          Deactivate
        </button>
      ) : (
        <>
          <input
            type="email"
            required
            placeholder="Enter Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">{isLoading ? 'Loading' : 'Submit'}</button>
        </>
      )}
    </form>
  )
}
