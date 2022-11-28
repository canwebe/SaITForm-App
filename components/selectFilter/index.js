import { useMemo } from 'react'
import s from '../../styles/Admin.module.css'

export default function SelectFilter({
  column: { filterValue, setFilter, preFilteredRows, id, Header },
}) {
  const options = useMemo(() => {
    const optionSet = new Set()
    preFilteredRows.forEach((item) => {
      optionSet.add(item.values[id])
    })
    return [...optionSet.values()]
  }, [id])

  return (
    <div className={s.filterInputs}>
      <label>{Header}</label>
      <select
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
