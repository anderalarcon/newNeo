import Script from 'next/script'
import '../styles/globals.scss'
// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21198826.js"/>
    </>
  )
}

export default MyApp
