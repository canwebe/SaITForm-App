import SelectFilter from '../components/selectFilter'

export const TABLE_COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'DOB',
    accessor: 'dob',
  },
  {
    Header: 'Gender',
    accessor: 'sex',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Nationality',
    accessor: 'nationality',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'State',
    accessor: 'state',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Religion',
    accessor: 'religion',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Degree',
    accessor: 'degree',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Course',
    accessor: 'course',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Branch',
    accessor: 'branch',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Type',
    accessor: 'admisionType',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Caste',
    accessor: 'caste',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Qualification',
    accessor: 'qualification',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Board',
    accessor: 'board',
    Filter: SelectFilter,
  },
  {
    Header: 'Year Of Passing',
    accessor: 'yearOfPass',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Alloted Category',
    accessor: 'allottedCategory',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Date of Allotment',
    accessor: 'dateOfAllotment',
  },
  {
    Header: 'Hostel',
    accessor: 'isHostel',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'Transport',
    accessor: 'isTransport',
    filter: 'equals',
    Filter: SelectFilter,
  },
  {
    Header: 'F Occupation',
    accessor: 'fOccupation',
    Filter: SelectFilter,
  },
  {
    Header: 'M Occupation',
    accessor: 'mOccupation',
    Filter: SelectFilter,
  },
]
