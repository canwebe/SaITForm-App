import { useRef } from 'react'
import s from '../adminContent/adminContent.module.css'

export default function Pagination({
  previousPage,
  canPreviousPage,
  pageIndex,
  pageOptions,
  nextPage,
  canNextPage,
  gotoPage,
  pageSize,
  setPageSize,
}) {
  const ref = useRef()
  return (
    <div className={s.paginationDiv}>
      <button
        onClick={previousPage}
        disabled={!canPreviousPage}
        className={s.pageBtn}
      >
        prev page
      </button>

      <p>
        Page {pageIndex + 1} of {pageOptions.length}
      </p>

      <button className={s.pageBtn} onClick={nextPage} disabled={!canNextPage}>
        next page
      </button>
      <div className={s.inputDiv}>
        <label>Row Per Page</label>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div className={s.inputDiv}>
        <button onClick={() => gotoPage(parseInt(ref.current.value) - 1)}>
          Go to Page
        </button>
        <input
          ref={ref}
          type="number"
          max={pageOptions.length}
          placeholder={`max ${pageOptions.length}`}
        />
      </div>
    </div>
  )
}
