import PrintSection from './printSection'
import s from '../../styles/Check.module.css'
import FieldBox from './fieldBox'
import { useFullData } from '../../contexts/fullDataContext'

export default function ParentsSection() {
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
  } = useFullData()

  return (
    <PrintSection title="Parents Information">
      <FieldBox label="Father Name">{fName}</FieldBox>
      <div className={s.printFlex}>
        <FieldBox label="Mobile">{fMobile}</FieldBox>
        <FieldBox label="Occupation">{fOccupation}</FieldBox>
        <FieldBox label="Email">{fEmail}</FieldBox>
      </div>
      <FieldBox label="Address">{fAddress}</FieldBox>
      <FieldBox label="Mother Name">{mName}</FieldBox>
      <div className={s.printFlex}>
        <FieldBox label="Mobile">{mMobile}</FieldBox>
        <FieldBox label="Occupation">{mOccupation}</FieldBox>
        <FieldBox label="Email">{mEmail}</FieldBox>
      </div>
      <FieldBox label="Address">{mAddress}</FieldBox>
      <FieldBox label="Gurdian Name">{gName}</FieldBox>
      <div className={s.printGrid}>
        <FieldBox label="Mobile">{gMobile}</FieldBox>
        <FieldBox label="Email">{gEmail}</FieldBox>
      </div>
    </PrintSection>
  )
}
