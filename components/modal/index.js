import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { MdHighlightOff, MdSearch } from 'react-icons/md'
import { checkStudent } from '../../helper/firebase'
import styles from './modal.module.css'

export default function Modal({ setIsModal, handleSuccess }) {
  const nameRef = useRef()
  const numberRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const handleModal = (e) => {
    if (e.target.classList.contains(styles.wrapper)) {
      setIsModal(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = toast.loading(<b>Getting Info..</b>)
    setIsLoading(true)
    try {
      const name = nameRef.current.value
      const number = numberRef.current.value
      const res = await checkStudent(name, number)
      if (res) {
        toast.success(<b>Candidate info found</b>, { id })
        setIsLoading(false)
        handleSuccess(res)
      } else {
        throw new Error(`No info found for ${name} with number - ${number}`)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(<b>{error.message}</b>, { id })
      setIsLoading(false)
    }
  }

  return (
    <div onClick={handleModal} className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.modal}>
        <input
          ref={nameRef}
          type="text"
          required
          placeholder="Enter Your Name"
        />
        <input
          ref={numberRef}
          type="text"
          required
          maxLength={10}
          placeholder="Enter Phone Number"
        />
        <button disabled={isLoading}>
          {isLoading ? (
            'Loading'
          ) : (
            <>
              <MdSearch /> Search
            </>
          )}
        </button>
        <MdHighlightOff
          className={styles.icon}
          onClick={() => setIsModal(false)}
        />
      </form>
    </div>
  )
}
