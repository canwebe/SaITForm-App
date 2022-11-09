import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="It is an online application form software for SaIT made by CWB."
          />
          <meta
            name="keywords"
            content="sambhram,online_form,form,canwebe,cwb,sait"
          />
          <meta name="author" content="Golam Rabbani" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href="https://saitform.vercel.app" />
          <link rel="apple-touch-icon" href="/assets/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content=" #7a59fb" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
