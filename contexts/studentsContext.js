import { createContext, useContext, useReducer } from 'react'
import StudentsReducer from '../reducers/studentsReducer,js'

const StudentsContext = createContext()

export const useStudentList = () => useContext(StudentsContext, [])

export default function StudentsContextProvider({ children }) {
  const [state, dispatch] = useReducer(StudentsReducer, null)
  return (
    <StudentsContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentsContext.Provider>
  )
}
