import s from '../../../styles/Admin.module.css'
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export default function SidebarAdmin({ setFilter, filter, setGlobalFilter }) {
  const [value, setValue] = useState(filter)

  // Functions
  // Input change for Global Search

  const handleChange = useAsyncDebounce((e) => {
    setGlobalFilter(e)
  }, 600)

  return (
    <div className={s.sideBar}>
      This is sidebar
      <input
        type="text"
        placeholder="Search Globally"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          handleChange(e.target.value)
        }}
      />
      <select name="" id="">
        <option value="">Hhdsh sdjhds</option>
      </select>
      <select name="" id="">
        <option value="">sdvs sds</option>
      </select>
      <select name="" id="">
        <option value="">sdscs sdss</option>
      </select>
    </div>
  )
}
