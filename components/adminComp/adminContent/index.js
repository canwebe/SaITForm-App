import { useMemo } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from 'react-table'
import { TABLE_COLUMNS } from '../../../helper/table'
import s from './adminContent.module.css'

export default function AdminContent({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow,
  setGlobalFilter,
  setFilter,
  state,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageOptions,
  gotoPage,
  setAllFilters,
  selectedFlatRows,
  toggleAllRowsSelected,
  allColumns,
}) {
  const defaultColumns = [
    'caste',
    'qualification',
    'board',
    'yearOfPass',
    'allottedCategory',
    'dateOfAllotment',
    'isHostel',
    'isTransport',
    'fOccupation',
    'mOccupation',
  ]

  return (
    <div className={s.adminContent}>
      <h3>Additional Columns</h3>
      <div className={s.checkboxesWrapper}>
        {allColumns.map((column) =>
          defaultColumns.includes(column.id) ? (
            <div key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                {column.Header}
              </label>
            </div>
          ) : null
        )}
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span className="flex">
                    {column.render('Header')}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <MdOutlineArrowDropUp className="iconSort" />
                      ) : (
                        <MdOutlineArrowDropDown className="iconSort" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
