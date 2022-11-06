import FormSection from '../../formSection'
import FormDiv from '../../FormDiv'
import s from './educationInfo.module.css'
import { useFullData } from '../../../contexts/fullDataContext'

export default function EducationInformation() {
  const { dispatch, educationDetails } = useFullData()

  const {
    ten,
    eleven,
    twelve,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
  } = educationDetails

  const tableData = [
    { name: '10th', value: ten, varName: 'ten' },
    { name: '11th', value: eleven, varName: 'eleven' },
    { name: '12th', value: twelve, varName: 'twelve' },
    { name: '1 Sem', value: one, varName: 'one' },
    { name: '2 Sem', value: two, varName: 'two' },
    { name: '3 Sem', value: three, varName: 'three' },
    { name: '4 Sem', value: four, varName: 'four' },
    { name: '5 Sem', value: five, varName: 'five' },
    { name: '6 Sem', value: six, varName: 'six' },
    { name: '7 Sem', value: seven, varName: 'seven' },
    { name: '8 Sem', value: eight, varName: 'eight' },
  ]
  const handleChange = (e, varName) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE_EDU', name, value, varName })
  }

  return (
    <FormSection title="Education Information">
      <div className="formGrid">
        <FormDiv title="12th Total Marks & Percentage">
          <input
            type="text"
            name="board"
            placeholder="Enter Marks and Percentage"
          />
        </FormDiv>
        <FormDiv title="Diploma Overall Marks & Percentage">
          <input type="text" name="board" placeholder="Diploma Marks and %" />
        </FormDiv>
        <FormDiv title="Degree Overall Marks & Percentage">
          <input type="text" name="board" placeholder="Degree Marks and %" />
        </FormDiv>
      </div>
      <div className="formFlex"></div>
      <div className={s.educationWrapper}>
        {tableData.map((item, i) => (
          <>
            <p className={s.classHeading}>{item.name}</p>
            <div className={s.grid}>
              <FormDiv title="Board">
                <input
                  type="text"
                  value={item.value.board}
                  onChange={(e) => handleChange(e, item.varName)}
                  name="board"
                  placeholder="Enter Board"
                />
              </FormDiv>
              <FormDiv title="Dip/UG">
                <input
                  value={item.value.dip_ug}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="dip_ug"
                  placeholder="Enter Dip/UG"
                />
              </FormDiv>
              <FormDiv title="%">
                <input
                  value={item.value.percentage}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="percentage"
                  placeholder="Percentage"
                />
              </FormDiv>

              <FormDiv title="Class Obtained">
                <input
                  value={item.value.classObtain}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="classObtain"
                  placeholder="Class Obtain"
                />
              </FormDiv>
              <FormDiv title="Year Of Passing">
                <input
                  value={item.value.yearOfPassing}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="yearOfPassing"
                  placeholder="Passing Year"
                />
              </FormDiv>
              <FormDiv title="Intstituion">
                <input
                  value={item.value.institution}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="institution"
                  placeholder="Enter Instituion"
                />
              </FormDiv>
              <FormDiv title="State">
                <input
                  value={item.value.state}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="state"
                  placeholder="Enter State"
                />
              </FormDiv>
            </div>
          </>
        ))}
      </div>
    </FormSection>
  )
}
