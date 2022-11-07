import FormSection from '../../formSection'
import s from './photoUpload.module.css'
import avatar from '../../../public/assets/user.webp'
import Image from 'next/image'
import { useFullData } from '../../../contexts/fullDataContext'
import toast from 'react-hot-toast'

export default function PhotoUploadParts({ setIsClick }) {
  const { dispatch, file, imgSrc } = useFullData()

  const acceptedTypes = ['image/png', 'image/jpeg']

  const handleChange = (e) => {
    const selected = e.target.files[0]
    if (!acceptedTypes.includes(selected?.type)) {
      toast.error(<b>Please select only JPEG or PNG format</b>)
      return
    }
    const url = URL.createObjectURL(selected)
    dispatch({ type: 'CHANGE_IMG', file: selected, url })
  }
  console.log(file, imgSrc)

  return (
    <FormSection title="Additional Information">
      <div className={s.photoDiv}>
        <div className={s.img}>
          <Image
            src={imgSrc || avatar}
            alt="Slected file"
            width={180}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={s.ulDiv}>
          <ul>
            <li>PLease give passport size photo</li>
            <li>Only image with JPEG, JPG and PNG Format</li>
            <li>File should be less than 500kb</li>
          </ul>
          <input
            accept="image/png,image/jpeg"
            onChange={handleChange}
            required
            type="file"
            name="file"
          />
        </div>
      </div>
      <button
        className={s.nextBtn}
        onClick={() => setIsClick(true)}
        type="submit"
      >
        Next
      </button>
    </FormSection>
  )
}
