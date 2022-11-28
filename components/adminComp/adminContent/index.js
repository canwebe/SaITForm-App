import dynamic from 'next/dynamic'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import s from './adminContent.module.css'
const Pagination = dynamic(() => import('../pagination'))

export default function AdminContent({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageOptions,
  gotoPage,
  allColumns,
  pageIndex,
  pageSize,
  setPageSize,
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
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, j) => (
                <th
                  key={j}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
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
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, j) => (
                  <td key={j} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      {!page.length ? (
        <p className={s.noDataTable}>No Data Found</p>
      ) : (
        <Pagination
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          nextPage={nextPage}
          canNextPage={canNextPage}
          gotoPage={gotoPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      )}
    </div>
  )
}
