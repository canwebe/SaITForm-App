import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { checkStudent } from '../helper/firebase'
import { useFullData } from '../contexts/fullDataContext'
import styles from '../styles/Home.module.css'
import homeImage from '../public/assets/home.svg'
import Image from 'next/image'

export default function FirstForm() {
  const [isLoading, setIsLoading] = useState(false)

  const { name, mobile, dispatch } = useFullData()

  // Router
  const router = useRouter()

  // Custom function

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = toast.loading('Fetching Data..')
    setIsLoading(true)
    try {
      const isEmpty = await checkStudent(name.trim().toLowerCase(), mobile)

      if (isEmpty) {
        router.push('/form')
        toast.success(<b>New Registration Found</b>, {
          id,
        })
        setIsLoading(false)
      } else {
        throw new Error('Already registered with this information')
      }
    } catch (error) {
      console.log(error)
      toast.error(<b>{error.message}</b>, {
        id,
      })
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.firstDivWrapper}>
      <div className={styles.imgDiv}>
        <Image src={homeImage} alt={'Home svg'} />
      </div>
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
