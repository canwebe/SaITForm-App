import s from '../../../styles/Admin.module.css'
import { useMemo, useState } from 'react'
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

  const columns = allColumns.reduce((prev, next) => {
    return {
      ...prev,
      [next.id]: next,
    }
  }, {})

  // Functions
  // Input change for Global Search
  const handleChange = (e) => {
    setGlobalFilter(e)
  }

  // Render Select Filters
  const renderSelect = (name, placeholder) => {
    const { filterValue, setFilter, preFilteredRows, id } = columns[name]

    const options = useMemo(() => {
      const optionSet = new Set()
      preFilteredRows.forEach((element) => {
        optionSet.add(element.values[id])
      })
      return [...optionSet.values()]
    }, [id, preFilteredRows])

    return (
      <div className={s.filterInputs}>
        <label>{placeholder}</label>
        {console.log(filterValue)}
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

  const selectLists = [
    {
      id: 'sex',
      name: 'Gender',
    },
    {
      id: 'nationality',
      name: 'Nationality',
    },
    {
      id: 'religion',
      name: 'Religion',
    },
    {
      id: 'caste',
      name: 'Caste',
    },
    {
      id: 'qualification',
      name: 'Qualification',
    },
    {
      id: 'board',
      name: 'Board',
    },
    {
      id: 'allottedCategory',
      name: 'Allotted Category',
    },
    {
      id: 'admisionType',
      name: 'Admision Type',
    },
    {
      id: 'degree',
      name: 'Degree',
    },
    {
      id: 'course',
      name: 'Course',
    },
    {
      id: 'branch',
      name: 'Branch',
    },
    {
      id: 'isHostel',
      name: 'Hostel',
    },
    {
      id: 'isTransport',
      name: 'Transport',
    },
    {
      id: 'fOccupation',
      name: 'Father Occupation',
    },
    {
      id: 'mOccupation',
      name: 'Mother Occupation',
    },
  ]

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

      <h4>Filters</h4>
      {selectLists.map((item) => renderSelect(item.id, item.name))}
    </div>
  )
}
