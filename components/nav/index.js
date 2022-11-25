import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useFullData } from '../../contexts/fullDataContext'
import styles from './nav.module.css'
import logo from '../../public/assets/logo.webp'
import { useState } from 'react'
const Modal = dynamic(() => import('../modal'))

export default function Nav() {
  const { dispatch } = useFullData()
  const router = useRouter()

  const [isModal, setIsModal] = useState(false)

  const handleNew = () => {
    dispatch({ type: 'RESET' })
    router.push('/')
  }
  const handleSuccess = (data) => {
    dispatch({ type: 'ADD_DATA', payload: data })

    router.push({
      pathname: '/check',
      query: { print: true },
    })

    setIsModal(false)
  }

  const handleClick = () => {
    setIsModal(true)
  }

  console.log(router.pathname)
  return (
    <nav>
      <div className="wrapper">
        <div className={styles.nav}>
          <Link href="/">
            <a className={styles.img}>
              <Image src={logo} alt="Sambhram Logo" priority={true} />
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
            <Link href="/admin">
              <a
                className={`${styles.link} ${
                  router.pathname === '/admin' ? 'active' : ''
                }`}
              >
                Admin
              </a>
            </Link>
          </div>
        </div>
      </div>
      {isModal ? (
        <Modal setIsModal={setIsModal} handleSuccess={handleSuccess} />
      ) : null}
    </nav>
  )
}
