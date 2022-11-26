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

export default function Admin() {
  // States
  const [isLoading, setIsLoading] = useState(false)

  const { state: studentsList, dispatch } = useStudentList()

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
          Cell: (props) => (
            <button className="viewBtn">View {console.log(props)}</button>
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
  } = tableInstances

  const { globalFilter, pageIndex, filters } = state

  console.log(data, allColumns, state)
  return (
    <div className={s.adminLayout}>
      <TopBar
        handleData={handleData}
        isLoading={isLoading}
        size={studentsList?.length}
      />
      <SidebarAdmin
        setFilter={setFilter}
        setGlobalFilter={setGlobalFilter}
        filter={globalFilter}
      />
      {studentsList ? <AdminContent {...tableInstances} /> : null}
    </div>
  )
}
