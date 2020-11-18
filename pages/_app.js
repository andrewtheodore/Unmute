import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
        <title>Unmute</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
