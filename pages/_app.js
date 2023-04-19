import Script from 'next/script'
import '../styles/globals.scss'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
// eslint-disable-next-line
function MyApp({ Component, pageProps }) {

  // Hotjar y TagManager
  useEffect(() => {
    hotjar.initialize(3412179, 6)
    TagManager.initialize({ gtmId: 'GTM-5F5MZXX' })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21198826.js"/>
    </>
  )
}

export default MyApp
