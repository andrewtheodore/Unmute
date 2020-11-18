import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  <>
    <Head>
      <title>Coach Portal</title>
      <link rel="shortcut icon" href="/logo_v1 1.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
