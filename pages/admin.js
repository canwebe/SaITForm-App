import toast from 'react-hot-toast'
import { useState } from 'react'
import AdminContent from '../components/adminComp/adminContent'
import SidebarAdmin from '../components/adminComp/sideBarAdmin'
import TopBar from '../components/adminComp/topBar'
import { useStudentList } from '../contexts/studentsContext'
import { getStudents } from '../helper/firebase'
import s from '../styles/Admin.module.css'

export default function Admin() {
  // States
  const [isLoading, setIsLoading] = useState(false)

  const { state, dispatch } = useStudentList()

  // Functions
  const handleData = async () => {
    setIsLoading(true)
    const id = toast.loading(<b>Collecting Students List Please Wait...</b>)
    try {
      const res = await getStudents()
      if (res) {
        dispatch({ type: 'ADD', payload: res })
        setIsLoading(false)
        toast.success(<b>Got the students list</b>, { id })
      } else {
        dispatch({ type: 'ADD', payload: [] })
        throw new Error('No students data found')
      }
    } catch (error) {
      console.log(error.message)
      toast.error(<b>{error.message}</b>, { id })
      setIsLoading(false)
    }
  }

  return (
    <div className={s.adminLayout}>
      <TopBar handleData={handleData} isLoading={isLoading} />
      <SidebarAdmin />
      <AdminContent data={state} />
    </div>
  )
}
