import Image from 'next/image'
import styles from './nav.module.css'
export default function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className={styles.nav}>
          <div className={styles.img}>
            <Image
              src="/assets/logo.webp"
              alt="Sambhram Logo"
              layout="responsive"
              width="400px"
              height="87px"
            />
          </div>
          <p className={styles.p}>Application Form</p>
          <div className={styles.btnWrapper}>
            <button className={styles.btnNew}>New Form</button>
            <button className={styles.link}>Admin</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
