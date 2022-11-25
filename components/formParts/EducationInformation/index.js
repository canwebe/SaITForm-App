import FormSection from '../../formSection'
import FormDiv from '../../FormDiv'
import s from './educationInfo.module.css'
import { useFullData } from '../../../contexts/fullDataContext'

export default function EducationInformation() {
  const { dispatch, educationDetails, twelveMark, diplomaMark, degreeMark } =
    useFullData()

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
    { name: '10th', value: ten, varName: 'ten', required: true },
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

  const handleInput = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  return (
    <FormSection title="Education Information">
      <div className="formFlex">
        <FormDiv title="12th Total Marks & Percentage">
          <input
            type="text"
            name="twelveMark"
            value={twelveMark}
            onChange={handleInput}
            placeholder="Enter Marks and Percentage"
          />
        </FormDiv>
        <FormDiv title="Diploma Overall Marks & Percentage">
          <input
            name="diplomaMark"
            value={diplomaMark}
            onChange={handleInput}
            type="text"
            placeholder="Diploma Marks and %"
          />
        </FormDiv>
        <FormDiv title="Degree Overall Marks & Percentage">
          <input
            name="degreeMark"
            value={degreeMark}
            onChange={handleInput}
            type="text"
            placeholder="Degree Marks and %"
          />
        </FormDiv>
      </div>
      <div className="formFlex"></div>
      <div className={s.educationWrapper}>
        {tableData.map((item, i) => (
          <div key={i}>
            <p className={s.classHeading}>{item.name}</p>
            <div className={s.grid}>
              <FormDiv title="Board">
                <input
                  required={item?.required}
                  type="text"
                  value={item.value.board}
                  onChange={(e) => handleChange(e, item.varName)}
                  name="board"
                  maxLength={15}
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
                  required={item?.required}
                  value={item.value.percentage}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  maxLength={3}
                  name="percentage"
                  placeholder="Percentage"
                />
              </FormDiv>

              <FormDiv title="Class Obtained">
                <input
                  required={item?.required}
                  value={item.value.classObtain}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  maxLength={10}
                  name="classObtain"
                  placeholder="Class Obtain"
                />
              </FormDiv>

              <FormDiv title="Year Of Passing">
                <input
                  min={2000}
                  max={2099}
                  required={item?.required}
                  value={item.value.yearOfPassing}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="number"
                  name="yearOfPassing"
                  placeholder="Passing Year"
                />
              </FormDiv>
              <FormDiv title="Intstituion">
                <input
                  required={item?.required}
                  value={item.value.institution}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="institution"
                  maxLength={15}
                  placeholder="Enter Instituion"
                />
              </FormDiv>
              <FormDiv title="State">
                <input
                  required={item?.required}
                  value={item.value.state}
                  onChange={(e) => handleChange(e, item.varName)}
                  type="text"
                  name="state"
                  maxLength={15}
                  placeholder="Enter State"
                />
              </FormDiv>
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  )
}
