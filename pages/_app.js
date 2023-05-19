import Script from 'next/script'
import '../styles/globals.scss'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

function GTagScripts () {
  return <>
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q40DSB1CK2" strategy='afterInteractive'></Script>
  <Script strategy='afterInteractive'>
    {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Q40DSB1CK2');`}
  </Script>
  </>
}
// eslint-disable-next-line
function MyApp({ Component, pageProps }) {

  // Hotjar y TagManager
  useEffect(() => {
    hotjar.initialize(3412179, 6)
    TagManager.initialize({ gtmId: 'GTM-5F5MZXX' })
    TagManager.initialize({ gtmId: 'GTM-K5493HX' })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21198826.js"/>
      <GTagScripts />
    </>
  )
}

export default MyApp
