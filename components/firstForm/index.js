import { useState } from 'react'
import toast from 'react-hot-toast'
import { checkStudent } from '../../helper/firebase'
import styles from './firstForm.module.css'

export default function FirstForm({ handleChange, name, mobile, setIsNew }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = toast.loading('Fetching Data..')
    setIsLoading(true)
    try {
      const isEmpty = await checkStudent(name.trim().toLowerCase(), mobile)

      if (isEmpty) {
        setIsNew(true)
        toast.success(<b>New Registration Found</b>, {
          id,
        })
      } else {
        toast.success(<b>Already registered with this information</b>, {
          id,
        })
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong try again!', {
        id,
      })
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.firstDivWrapper}>
      <form className={styles.firstForm} onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <input
            name="name"
            className={styles.formInput}
            placeholder=" "
            value={name}
            required
            onChange={handleChange}
          />
          <label className={styles.formLabel}>Enter Full Name</label>
        </div>
        <div className={styles.formDiv}>
          <input
            type="tel"
            name="mobile"
            className={styles.formInput}
            placeholder=" "
            value={mobile}
            maxLength="10"
            required
            pattern="[0-9]{10}"
            onChange={handleChange}
          />
          <label className={styles.formLabel}>Enter Mobile Number</label>
        </div>

        <button disabled={isLoading} className={styles.btnNext} type="submit">
          {isLoading ? 'Loading' : 'Next'}
        </button>
      </form>
    </div>
  )
}
