import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'
import FirstForm from '../components/firstForm'
import SecondForm from '../components/secondForm'
import { useFullData } from '../contexts/fullDataContext'
import { checkStudent } from '../helper/firebase'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { name, mobile, dispatch } = useFullData()

  const [isNew, setIsNew] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }

  return (
    <>
      {isNew ? (
        <SecondForm name={name} mobile={mobile} />
      ) : (
        <FirstForm
          handleChange={handleChange}
          name={name}
          mobile={mobile}
          setIsNew={setIsNew}
        />
      )}
    </>
  )
}
