import styles from './modal.module.css'

export default function Modal({ setIsModal }) {
  const handleModal = (e) => {
    if (e.target.classList.contains(styles.wrapper)) {
      setIsModal(false)
    }
  }

  return (
    <div onClick={handleModal} className={styles.wrapper}>
      <form className={styles.modal}>
        <input type="text" required placeholder="Enter Your Name" />
        <input type="text" required placeholder="Enter Phone Number" />
        <button>Search</button>
      </form>
    </div>
  )
}
