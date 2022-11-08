import { useFullData } from '../../contexts/fullDataContext'
import s from '../../styles/Check.module.css'
import FieldBox from './fieldBox'
import PrintSection from './printSection'

const tableData = [
  { name: '10th', varName: 'ten' },
  { name: '11th', varName: 'eleven' },
  { name: '12th', varName: 'twelve' },
  { name: '1 Sem', varName: 'one' },
  { name: '2 Sem', varName: 'two' },
  { name: '3 Sem', varName: 'three' },
  { name: '4 Sem', varName: 'four' },
  { name: '5 Sem', varName: 'five' },
  { name: '6 Sem', varName: 'six' },
  { name: '7 Sem', varName: 'seven' },
  { name: '8 Sem', varName: 'eight' },
]

export default function EducationInfo() {
  const { educationDetails, twelveMark, diplomaMark, degreeMark } =
    useFullData()

  return (
    <PrintSection title="Education Information">
      <table className={s.table}>
        <thead>
          <tr>
            <th>Class</th>
            <th>Board</th>
            <th>Dip/UG</th>
            <th>%</th>
            <th>Class Obtain</th>
            <th>Year of Passing</th>
            <th>Institution</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{educationDetails[item.varName].board}</td>
              <td>{educationDetails[item.varName].dip_ug}</td>
              <td>{educationDetails[item.varName].percentage}</td>
              <td>{educationDetails[item.varName].classObtain}</td>
              <td>{educationDetails[item.varName].yearOfPassing}</td>
              <td>{educationDetails[item.varName].institution}</td>
              <td>{educationDetails[item.varName].state}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FieldBox label="12th Total Marks & Percentage">{twelveMark}</FieldBox>
      <FieldBox label="Diploma Overall Marks & Percentage">
        {diplomaMark}
      </FieldBox>
      <FieldBox label="Degree Overall Marks & Percentage">
        {degreeMark}
      </FieldBox>
    </PrintSection>
  )
}
