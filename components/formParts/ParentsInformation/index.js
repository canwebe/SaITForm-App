import { useFullData } from '../../../contexts/fullDataContext'
import FormDiv from '../../FormDiv'
import FormSection from '../../formSection'

export default function ParentsInformation() {
  const {
    fName,
    fMobile,
    fEmail,
    fOccupation,
    fAddress,
    mName,
    mMobile,
    mEmail,
    mOccupation,
    mAddress,
    gName,
    gMobile,
    gEmail,
    dispatch,
  } = useFullData()

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  return (
    <FormSection title="Parents Information">
      <div className="subSection">
        <h4>Father Details</h4>
        <FormDiv title="Father Name">
          <input
            required
            name="fName"
            value={fName}
            onChange={handleChange}
            type="text"
            placeholder="Your Father Name"
          />
        </FormDiv>
        <div className="formGrid">
          <FormDiv title="Mobile Mo">
            <input
              required
              name="fMobile"
              value={fMobile}
              onChange={handleChange}
              type="text"
              placeholder="Your Father Number"
            />
          </FormDiv>
          <FormDiv title="Occupation">
            <input
              required
              name="fOccupation"
              value={fOccupation}
              onChange={handleChange}
              type="text"
              placeholder="Your Father Occupation"
            />
          </FormDiv>
          <FormDiv title="Email">
            <input
              name="fEmail"
              value={fEmail}
              onChange={handleChange}
              type="email"
              placeholder="Your Father Email"
            />
          </FormDiv>
        </div>
        <FormDiv title="Address">
          <textarea
            required
            name="fAddress"
            value={fAddress}
            onChange={handleChange}
            rows="3"
          />
        </FormDiv>
      </div>
      <div className="subSection">
        <h4>Mother Details</h4>
        <FormDiv title="Mother Name">
          <input
            required
            name="mName"
            value={mName}
            onChange={handleChange}
            type="text"
            placeholder="Your Mother Name"
          />
        </FormDiv>
        <div className="formGrid">
          <FormDiv title="Mobile Mo">
            <input
              required
              name="mMobile"
              value={mMobile}
              onChange={handleChange}
              type="text"
              placeholder="Your Mother Number"
            />
          </FormDiv>
          <FormDiv title="Occupation">
            <input
              required
              name="mOccupation"
              value={mOccupation}
              onChange={handleChange}
              type="text"
              placeholder="Your Mother Occupation"
            />
          </FormDiv>
          <FormDiv title="Email">
            <input
              name="mEmail"
              value={mEmail}
              onChange={handleChange}
              type="email"
              placeholder="Your Mother Email"
            />
          </FormDiv>
        </div>
        <FormDiv title="Address">
          <textarea
            required
            name="mAddress"
            value={mAddress}
            onChange={handleChange}
            rows="3"
          />
        </FormDiv>
      </div>
      <div className="subSection">
        <h4>Gurdian Details</h4>
        <div className="formGrid">
          <FormDiv title="Guardian Name">
            <input
              required
              name="gName"
              value={gName}
              onChange={handleChange}
              type="text"
              placeholder="Your Guardian Name"
            />
          </FormDiv>
          <FormDiv title="Mobile Mo">
            <input
              required
              name="gMobile"
              value={gMobile}
              onChange={handleChange}
              type="text"
              placeholder="Your Guardian Number"
            />
          </FormDiv>

          <FormDiv title="Email">
            <input
              name="gEmail"
              value={gEmail}
              onChange={handleChange}
              type="email"
              placeholder="Your Gurdian Email"
            />
          </FormDiv>
        </div>
      </div>
    </FormSection>
  )
}
