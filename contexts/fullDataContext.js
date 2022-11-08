import { createContext, useContext, useReducer } from 'react'
import { INITIAL_STATE } from '../data/data'
import FullDataReducer from '../reducers/fullDataReducer'

const FUllDataContext = createContext()

export const useFullData = () => useContext(FUllDataContext)

export default function FUllDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(FullDataReducer, INITIAL_STATE)
  return (
    <FUllDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FUllDataContext.Provider>
  )
}
