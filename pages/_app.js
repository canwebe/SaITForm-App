import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer'
import Nav from '../components/nav'
import FUllDataContextProvider from '../contexts/fullDataContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SaITForm</title>
      </Head>
      <main>
        <FUllDataContextProvider>
          <Nav />
          <div className="wrapper">
            <Component {...pageProps} />
          </div>
          <Footer />
        </FUllDataContextProvider>
      </main>
      <Toaster />
    </>
  )
}

export default MyApp
