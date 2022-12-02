import { useFullData } from '../../contexts/fullDataContext'
import s from '../../styles/Check.module.css'
import CheckBox from './checkBox'
import FieldBox from './fieldBox'
import PrintSection from './printSection'

const checkBox1 = [
  { name: 'CET', value: 'cet' },
  { name: 'COMED-K', value: 'comed-k' },
  { name: 'MGMT', value: 'mgmt' },
]

export default function StudentInfo() {
  const {
    name,
    mobile,
    dob,
    sex,
    state,
    nationality,
    religion,
    caste,
    email,
    qualification,
    board,
    yearOfPass,
    aadhar,
    allottedCategory,
    dateOfAllotment,
    admisionType,
    alRank,
    alNo,
    alFee,
    feeRecieptNo,
    amountPaid,
  } = useFullData()

  return (
    <PrintSection title="Student Information">
      <div className={s.printFlex}>
        <FieldBox label="Name">{name?.toUpperCase()}</FieldBox>
        <FieldBox label="DOB">{new Date(dob).toDateString()}</FieldBox>
        <FieldBox label="Gender">
          <CheckBox
            checked={sex}
            data={[
              { name: 'Male', value: 'male' },
              { name: 'Female', value: 'female' },
            ]}
          />
        </FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="State">{state?.toUpperCase()}</FieldBox>
        <FieldBox label="Nationality">{nationality?.toUpperCase()}</FieldBox>
        <FieldBox label="Religion">{religion?.toUpperCase()}</FieldBox>
        <FieldBox label="Caste">{caste?.toUpperCase()}</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="Student Mobile No">{mobile}</FieldBox>
        <FieldBox label="Email Id">{email}</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="Qualification">{qualification}</FieldBox>
        <FieldBox label="Board">{board}</FieldBox>
        <FieldBox label="Year of Pass">{yearOfPass}</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="Aadhar">{aadhar}</FieldBox>
        <FieldBox label="Allotted Category">{allottedCategory}</FieldBox>
        <FieldBox label="Date of Allottment">
          {new Date(dateOfAllotment).toDateString()}
        </FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="Type">
          <CheckBox checked={admisionType} data={checkBox1} />
        </FieldBox>
        <FieldBox label="CET/COMED-K/MGMT Rank">{alRank}</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="CET/COMED-K/MGMT No">{alNo}</FieldBox>
        <FieldBox label="Fee Collected at KEA/COMED-K">{alFee}</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="College Fee Reciept No./Date">{feeRecieptNo}</FieldBox>
        <FieldBox label="College Amount Paid:">{amountPaid}</FieldBox>
      </div>
    </PrintSection>
  )
}
