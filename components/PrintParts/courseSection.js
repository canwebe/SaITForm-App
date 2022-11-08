import PrintSection from './printSection'
import s from '../../styles/Check.module.css'
import FieldBox from './fieldBox'
import CheckBox from './checkBox'
import { branchMap } from '../../data/data'
import { useFullData } from '../../contexts/fullDataContext'

export default function CourseSection() {
  const { degree, course, branch, isTransport, isHostel, dropPoint } =
    useFullData()

  return (
    <PrintSection title="Course Information" low={true}>
      <div className={s.printFlex}>
        <FieldBox label="Degree">
          <div className={s.upperCase}>{degree}</div>
        </FieldBox>
        <FieldBox label="Course">
          <div className={s.upperCase}>{course}</div>
        </FieldBox>
        {branch ? (
          <FieldBox label="Branch">
            <CheckBox checked={branch} data={branchMap[course]} />
          </FieldBox>
        ) : null}
      </div>

      <FieldBox label="Do you require Hostel Facility?">
        <CheckBox
          checked={isHostel}
          data={[
            { name: 'Boys Hostel', value: 'boysHostel' },
            { name: 'Girls Hostel', value: 'girlsHostel' },
            { name: 'Not Required', value: 'no' },
          ]}
        />
        (If Yes Please Contact)
      </FieldBox>
      <div className={s.printGrid}>
        <FieldBox label="Mr. Kumar Reddy (Boys Hostel)">9738191360</FieldBox>
        <FieldBox label="Mrs. Nandini (Girls Hostel)">8197969329</FieldBox>
      </div>
      <div className={s.printFlex}>
        <FieldBox label="Do you require Transport Facility?">
          <CheckBox
            checked={isTransport}
            data={[
              { name: 'Yes', value: 'yes' },
              { name: 'No', value: 'no' },
            ]}
          />
        </FieldBox>
        <FieldBox label="If Yes, Drop point">{dropPoint}</FieldBox>
      </div>
    </PrintSection>
  )
}
