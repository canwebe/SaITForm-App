import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useReducer } from 'react'
import Loading from '../components/loading'
import { auth } from '../lib/firebase'
import { AuthReducer } from '../reducers/authReducers'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const getAccessAdmin = () => {
  if (typeof window !== 'undefined')
    return JSON.parse(localStorage.getItem('admin'))
}

const INITIAL_STATE = {
  user: null,
  isAuthReady: false,
  admin: getAccessAdmin(),
}

export default function AuthContextProvider({ children }) {
  const [data, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      dispatch({ type: 'AUTHREADY', payload: authUser })
    })

    return () => unsub()
  }, [auth])

  useEffect(() => {
    if (!data.admin?.length && JSON.parse(localStorage.getItem('admin'))) {
      dispatch({
        type: 'ADMIN_LOGIN',
        payload: JSON.parse(localStorage.getItem('admin')),
      })
    }
  }, [data])

  return (
    <AuthContext.Provider value={{ ...data, dispatch }}>
      {data?.isAuthReady ? children : <Loading />}
    </AuthContext.Provider>
  )
}
