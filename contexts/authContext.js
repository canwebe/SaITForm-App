import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../lib/firebase'
import { AuthReducer } from '../reducers/authReducers'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const INITIAL_STATE = {
  user: null,
  isAuthReady: false,
  admin:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('admin'))
      : null,
}

export default function AuthContextProvider({ children }) {
  const [data, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      dispatch({ type: 'AUTHREADY', payload: authUser })
    })

    return () => unsub()
  }, [auth])

  return (
    <AuthContext.Provider value={{ ...data, dispatch }}>
      {data?.isAuthReady ? children : null}
    </AuthContext.Provider>
  )
}
