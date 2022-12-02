import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer'
import Nav from '../components/nav'
import FUllDataContextProvider from '../contexts/fullDataContext'
import '../styles/globals.css'
import '../styles/nprogress.css'
import nProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import StudentsContextProvider from '../contexts/studentsContext'
import AuthContextProvider from '../contexts/authContext'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

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

  console.log(
    'Looks like you are on the wrong place, There is nothing here .If you want to work with us contact teamCanWeBe!'
  )

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>SaITForm</title>
      </Head>
      <AuthContextProvider>
        {router.pathname === '/activate' ? (
          <Component {...pageProps} />
        ) : (
          <main>
            <FUllDataContextProvider>
              <Nav />
              <div className="wrapper">
                <StudentsContextProvider>
                  <Component {...pageProps} />
                </StudentsContextProvider>
              </div>
              {router.pathname !== '/admin' ? <Footer /> : null}
            </FUllDataContextProvider>
          </main>
        )}
      </AuthContextProvider>
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
