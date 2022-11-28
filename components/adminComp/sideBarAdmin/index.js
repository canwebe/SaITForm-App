import s from '../../../styles/Admin.module.css'
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import Button from '../../Button'

export default function SidebarAdmin({
  filter,
  setGlobalFilter,
  preGlobalFilteredRows,
  allColumns,
  filters,
  setAllFilters,
  setFilter,
}) {
  const [value, setValue] = useState(filter)

  // Functions
  // Input change for Global Search
  const handleChange = (e) => {
    setGlobalFilter(e)
  }

  return (
    <div className={s.sideBar}>
      <div className={s.stickyTop}>
        <input
          type="text"
          placeholder={`Search among ${preGlobalFilteredRows.length} results`}
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value)
            handleChange(e.target.value)
          }}
        />

        {filters?.length ? (
          <div className={s.filtersInfo}>
            {filters.map((item) => (
              <Button
                onClick={() => setFilter(item.id, null)}
                type="small border-blue"
                key={item.id}
              >
                {item.id} : {item.value}
              </Button>
            ))}
            <Button onClick={() => setAllFilters([])} type="small border-red">
              Reset All
            </Button>
          </div>
        ) : null}
      </div>

      <h4 className={s.filterH4}>Filters</h4>
      {allColumns.map((column) => {
        if (column.canFilter && column.Filter) {
          return column.render('Filter')
        }
      })}
    </div>
  )
}
