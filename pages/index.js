import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'
import FirstForm from '../components/firstForm'
import SecondForm from '../components/secondForm'
import { checkStudent } from '../helper/firebase'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState({
    name: '',
    mobile: '',
  })

  const [isNew, setIsNew] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      {isNew ? (
        <SecondForm data={data} handleChange={handleChange} />
      ) : (
        <FirstForm
          handleChange={handleChange}
          name={data.name}
          mobile={data.mobile}
          setIsNew={setIsNew}
        />
      )}
    </>
  )
}
