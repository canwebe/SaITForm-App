import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer'
import Nav from '../components/nav'
import FUllDataContextProvider from '../contexts/fullDataContext'
import '../styles/globals.css'
import '../styles/nprogress.css'
import nProgress from 'nprogress'
import Router from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // Configuration of NProgress
  nProgress.configure({ showSpinner: false })

  // UseEffect for nprogress
  useEffect(() => {
    const handleStart = () => nProgress.start()
    const handleStop = () => nProgress.done()
    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
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
      <div className="mobile">
        <p>
          This app is not supported in this width. Please use this app on
          installed systems only.
        </p>
      </div>
      <Toaster />
    </>
  )
}

export default MyApp
