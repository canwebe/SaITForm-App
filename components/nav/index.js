import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFullData } from '../../contexts/fullDataContext'
import styles from './nav.module.css'
import logo from '../../public/assets/logo.webp'
import { useState } from 'react'
import Modal from '../modal'

export default function Nav() {
  const { dispatch } = useFullData()
  const router = useRouter()

  const [isModal, setIsModal] = useState(false)

  const handleNew = () => {
    dispatch({ type: 'RESET' })
    router.push('/')
  }

  const handleClick = () => {
    setIsModal(true)
  }

  return (
    <nav>
      <div className="wrapper">
        <div className={styles.nav}>
          <Link href="/">
            <a className={styles.img}>
              <Image src={logo} alt="Sambhram Logo" priority />
            </a>
          </Link>
          <p className={styles.p}>Application Form</p>
          <div className={styles.btnWrapper}>
            <button onClick={handleNew} className={styles.btnNew}>
              New Form
            </button>
            <button onClick={handleClick} className={styles.link}>
              Get Form
            </button>
            <button className={styles.link}>Admin</button>
          </div>
        </div>
      </div>
      <Modal setIsModal={setIsModal} />
    </nav>
  )
}
