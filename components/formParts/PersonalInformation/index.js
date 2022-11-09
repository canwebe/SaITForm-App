import { useFullData } from '../../../contexts/fullDataContext'
import {
  casteData,
  nationalityData,
  religionData,
  statesData,
} from '../../../data/data'
import FormDiv from '../../FormDiv'
import FormSection from '../../formSection'

export default function PersonalInformation() {
  const {
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
    dispatch,
  } = useFullData()

  const isAlRequired = admisionType === 'cet' || admisionType === 'comed-k'

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  return (
    <FormSection title="Personal Information">
      <div className="formFlex">
        <FormDiv title="Date of Birth">
          <input
            name="dob"
            value={dob}
            type="date"
            placeholder="Enter your DOB"
            onChange={handleChange}
            required
          />
        </FormDiv>
        <FormDiv title="Gender">
          <select required name="sex" value={sex} onChange={handleChange}>
            <option disabled value="">
              Choose Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
        <FormDiv title="State">
          <select required name="state" value={state} onChange={handleChange}>
            <option disabled value="">
              Choose State
            </option>
            {statesData.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </FormDiv>
        <FormDiv title="Nationality">
          <select
            required
            name="nationality"
            value={nationality}
            onChange={handleChange}
          >
            <option disabled value="">
              Choose Nationality
            </option>
            {nationalityData.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </FormDiv>
      </div>
      <div className="formFlex">
        <FormDiv title="Religion">
          <select
            required
            name="religion"
            value={religion}
            onChange={handleChange}
          >
            <option disabled value="">
              Choose Religion
            </option>
            {religionData.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </FormDiv>
        <FormDiv title="Caste">
          <select required name="caste" value={caste} onChange={handleChange}>
            <option disabled value="">
              Choose caste
            </option>
            {casteData.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </FormDiv>
        <FormDiv title="Your Email">
          <input
            required
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            onError={() => alert('Error Hai bhai')}
            placeholder="Enter your email"
          />
        </FormDiv>
      </div>
      <div className="formFlex">
        <FormDiv title="Qualification">
          <input
            required
            name="qualification"
            value={qualification}
            onChange={handleChange}
            type="text"
            placeholder="Enter qualification"
          />
        </FormDiv>
        <FormDiv title="Board">
          <input
            required
            name="board"
            value={board}
            onChange={handleChange}
            type="text"
            placeholder="Enter your Board"
          />
        </FormDiv>
        <FormDiv title="Year of Passing">
          <input
            required
            maxLength={4}
            name="yearOfPass"
            value={yearOfPass}
            onChange={handleChange}
            type="text"
            placeholder="Year of Passing"
          />
        </FormDiv>
        <FormDiv title="Aadhar No">
          <input
            name="aadhar"
            value={aadhar}
            onChange={handleChange}
            type="text"
            placeholder="Your Aadhar No"
          />
        </FormDiv>
      </div>
      <div className="formGrid">
        <FormDiv title="Allotted Category">
          <input
            required
            name="allottedCategory"
            value={allottedCategory}
            onChange={handleChange}
            type="text"
            placeholder="Your Allotted Category"
          />
        </FormDiv>
        <FormDiv title="Date of Allotment">
          <input
            required
            name="dateOfAllotment"
            value={dateOfAllotment}
            onChange={handleChange}
            type="date"
          />
        </FormDiv>
        <FormDiv title="Category">
          <select
            required
            name="admisionType"
            value={admisionType}
            onChange={handleChange}
          >
            <option disabled value="">
              Choose Admission Type
            </option>
            <option value="cet">CET</option>
            <option value="comed-k">COMED-K</option>
            <option value="mgmt">MGMT</option>
          </select>
        </FormDiv>
      </div>
      <div className="formGrid">
        <FormDiv title="CET/COMED-K/MGMT Rank">
          <input
            required={isAlRequired}
            name="alRank"
            value={alRank}
            onChange={handleChange}
            type="text"
            placeholder="Enter required rank"
          />
        </FormDiv>
        <FormDiv title="CET/COMED-K/MGMT No">
          <input
            required={isAlRequired}
            name="alNo"
            value={alNo}
            onChange={handleChange}
            type="text"
            placeholder="Enter required no"
          />
        </FormDiv>
      </div>
      <div className="formGrid">
        <FormDiv title="Fee Collected at KEA/COMED-K">
          <input
            required={isAlRequired}
            name="alFee"
            value={alFee}
            onChange={handleChange}
            type="text"
            placeholder="Fee Collected"
          />
        </FormDiv>
        <FormDiv title="College Fee Reciept No/Date">
          <input
            required={isAlRequired}
            name="feeRecieptNo"
            value={feeRecieptNo}
            onChange={handleChange}
            type="text"
            placeholder="Fee Reciept No/Date"
          />
        </FormDiv>
        <FormDiv title="College Fee Amount Paid">
          <input
            required={isAlRequired}
            name="amountPaid"
            value={amountPaid}
            onChange={handleChange}
            type="text"
            placeholder="Mention amount paid"
          />
        </FormDiv>
      </div>
    </FormSection>
  )
}
