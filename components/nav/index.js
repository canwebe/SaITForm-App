import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFullData } from '../../contexts/fullDataContext'
import styles from './nav.module.css'
export default function Nav() {
  const { dispatch } = useFullData()
  const router = useRouter()

  const handleNew = () => {
    dispatch({ type: 'RESET' })
    router.push('/')
  }

  return (
    <nav>
      <div className="wrapper">
        <div className={styles.nav}>
          <Link href="/">
            <a className={styles.img}>
              <Image
                src="/assets/logo.webp"
                alt="Sambhram Logo"
                layout="responsive"
                width="400px"
                height="87px"
              />
            </a>
          </Link>
          <p className={styles.p}>Application Form</p>
          <div className={styles.btnWrapper}>
            <button onClick={handleNew} className={styles.btnNew}>
              New Form
            </button>
            <button className={styles.link}>Admin</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
