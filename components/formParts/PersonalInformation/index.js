import { useFullData } from '../../../contexts/fullDataContext'
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

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  return (
    <FormSection title="Personal Information">
      <div className="formGrid">
        <FormDiv title="Date of Birth">
          <input
            name="dob"
            value={dob}
            type="date"
            placeholder="Enter your DOB"
            onChange={handleChange}
          />
        </FormDiv>
        <FormDiv title="Sex">
          <select name="sex" value={sex} onChange={handleChange}>
            <option value="">Choose Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
        <FormDiv title="State">
          <select name="state" value={state} onChange={handleChange}>
            <option value="">Choose Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
        <FormDiv title="Nationality">
          <select
            name="nationality"
            value={nationality}
            onChange={handleChange}
          >
            <option value="">Choose Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
      </div>
      <div className="formFlex">
        <FormDiv title="Religion">
          <select name="religion" value={religion} onChange={handleChange}>
            <option value="">Choose Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
        <FormDiv title="Caste">
          <select name="caste" value={caste} onChange={handleChange}>
            <option value="">Choose Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormDiv>
        <FormDiv title="Your Email">
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
          />
        </FormDiv>
      </div>
      <div className="formGrid">
        <FormDiv title="Qualification">
          <input
            name="qualification"
            value={qualification}
            onChange={handleChange}
            type="text"
            placeholder="Enter qualification"
          />
        </FormDiv>
        <FormDiv title="Board">
          <input
            name="board"
            value={board}
            onChange={handleChange}
            type="text"
            placeholder="Enter your Board"
          />
        </FormDiv>
        <FormDiv title="Year of Passing">
          <input
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
            name="allottedCategory"
            value={allottedCategory}
            onChange={handleChange}
            type="text"
            placeholder="Your Allotted Category"
          />
        </FormDiv>
        <FormDiv title="Date of Allotment">
          <input
            name="dateOfAllotment"
            value={dateOfAllotment}
            onChange={handleChange}
            type="date"
          />
        </FormDiv>
        <FormDiv title="Category">
          <select
            name="admisionType"
            value={admisionType}
            onChange={handleChange}
          >
            <option value="">Choose Admission Type</option>
            <option value="cet">CET</option>
            <option value="comed-k">COMED-K</option>
            <option value="mgmt">MGMT</option>
          </select>
        </FormDiv>
      </div>
      <div className="formGrid">
        <FormDiv title="CET/COMED-K/MGMT Rank">
          <input
            name="alRank"
            value={alRank}
            onChange={handleChange}
            type="text"
            placeholder="Enter required rank"
          />
        </FormDiv>
        <FormDiv title="CET/COMED-K/MGMT No">
          <input
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
            name="alFee"
            value={alFee}
            onChange={handleChange}
            type="text"
            placeholder="Fee Collected"
          />
        </FormDiv>
        <FormDiv title="College Fee Reciept No/Date">
          <input
            name="feeRecieptNo"
            value={feeRecieptNo}
            onChange={handleChange}
            type="text"
            placeholder="Fee Reciept No/Date"
          />
        </FormDiv>
        <FormDiv title="College Fee Amount Paid">
          <input
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
