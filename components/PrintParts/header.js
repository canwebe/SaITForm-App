import Image from 'next/image'
import s from '../../styles/Check.module.css'
import avatar from '../../public/assets/user.webp'
import { useFullData } from '../../contexts/fullDataContext'

export default function Header() {
  const { imgSrc } = useFullData()
  return (
    <div className={s.header}>
      <h1>SAMBHRAM INSTITUTE OF TECHNOLOGY</h1>
      <p className={s.address}>M.S Palya Jalahali East, Bangalore - 560097</p>
      <h3>APPLICATION FORM</h3>

      <div className={s.imgDiv}>
        <p>FORM - S1</p>
        <div className={s.img}>
          <Image
            src={imgSrc || avatar}
            alt="passport file"
            width={180}
            height={200}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}
