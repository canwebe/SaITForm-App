import AdminContent from '../components/adminComp/adminContent'
import SidebarAdmin from '../components/adminComp/sideBarAdmin'
import TopBar from '../components/adminComp/topBar'
import s from '../styles/Admin.module.css'

export default function Admin() {
  return (
    <div className={s.adminLayout}>
      <TopBar />
      <SidebarAdmin />
      <AdminContent />
    </div>
  )
}
