import Script from 'next/script'
import '../styles/globals.scss'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
// eslint-disable-next-line
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    hotjar.initialize(3412179, 6)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21198826.js"/>
    </>
  )
}

export default MyApp
