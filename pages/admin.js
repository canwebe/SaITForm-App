import toast from 'react-hot-toast'
import { useState, useMemo } from 'react'
import AdminContent from '../components/adminComp/adminContent'
import SidebarAdmin from '../components/adminComp/sideBarAdmin'
import TopBar from '../components/adminComp/topBar'
import { useStudentList } from '../contexts/studentsContext'
import { getStudents } from '../helper/firebase'
import s from '../styles/Admin.module.css'
import { TABLE_COLUMNS } from '../helper/table'
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import { useFullData } from '../contexts/fullDataContext'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/authContext'

export default function Admin() {
  const router = useRouter()

  // States
  const [isLoading, setIsLoading] = useState(false)

  const { state: studentsList, dispatch } = useStudentList()
  const { dispatch: dispatchData } = useFullData()
  const { user, admin } = useAuth()

  // Functions
  const handleData = async () => {
    if (!user) {
      toast.error(<b>This system is not activated. Contact CWB Team!</b>)
      return
    }
    if (!admin) {
      toast.error(<b>Login as admin first</b>)
      return
    }
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

  // handle View Btn
  const handleView = (value) => {
    if (value) {
      dispatchData({ type: 'ADD_DATA', payload: value })
      router.push({
        pathname: '/check',
        query: { print: true },
      })
    }
  }

  // Table Initialization
  const columns = useMemo(() => TABLE_COLUMNS, [])

  const data = useMemo(() => studentsList || [], [studentsList])

  const tableInstances = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 20,
        hiddenColumns: [
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
        ],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          Header: 'View',
          Cell: ({ row }) => (
            <button
              onClick={() => handleView(row?.original)}
              className="viewBtn"
            >
              View
            </button>
          ),
        },
        ...columns,
      ])
    }
  )
  const {
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
    allColumns,
    preGlobalFilteredRows,
    setPageSize,
  } = tableInstances

  const { globalFilter, pageIndex, filters, pageSize } = state

  return (
    <div className={s.adminLayout}>
      <TopBar
        handleData={handleData}
        isLoading={isLoading}
        size={studentsList?.length}
      />

      {studentsList && admin ? (
        <>
          <SidebarAdmin
            setAllFilters={setAllFilters}
            setFilter={setFilter}
            setGlobalFilter={setGlobalFilter}
            filter={globalFilter}
            filters={filters}
            preGlobalFilteredRows={preGlobalFilteredRows}
            allColumns={allColumns}
          />
          <AdminContent
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            page={page}
            prepareRow={prepareRow}
            nextPage={nextPage}
            previousPage={previousPage}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            pageOptions={pageOptions}
            gotoPage={gotoPage}
            allColumns={allColumns}
            pageIndex={pageIndex}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </>
      ) : null}
    </div>
  )
}
