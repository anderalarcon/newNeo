import Bcorp from '../../../components/Bcorp/Bcorp'
import Clients from '../../../components/Clients/Clients'
import Contact from '../../../components/Contact/Contact'
import Header from '../../../components/Header/Header'
import Hero from '../../../components/Hero/Hero'
import Questions from '../../../components/Questions/Questions'
import Trust from '../../../components/Companies/Trust/Trust'
import Region from '../../../components/Region/Region'
import Solutions from '../../../components/Solutions/Solutions'
import Partners from '../../../components/Companies/Partners/Partners'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import { questionsHome } from '../../../utilities/home/questions'
import { recommendations } from '../../../utilities/global/recommendations'
import Content from '../../../components/Content/Content'
import Footer from '../../../components/Footer/Footer'
import { solutionsPeru } from '../../../utilities/home/solutions'
import { peruCases } from '../../../utilities/home/cases'
import Head from 'next/head'
import { useUtm } from '../../../utilities/global/customhooks'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const pe = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'page_view',
        page_path: '/home-principal-peru'
      }
    })
  }, [])

  const [urlHasUtm, router] = useUtm()
  return (
    <>
      <Head>
        <title>Consultoria en Marketing Digital | NEO Consulting Perú</title>
        <meta
          name="description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/05/0.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Consultoria en Marketing Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router} />
      <Hero urlHasUtm={urlHasUtm} router={router}/>
      <Solutions solutions={solutionsPeru} urlHasUtm={urlHasUtm} router={router} />
      <Partners />
      <SuccessCase cases={peruCases} />
      <Clients recommendations={recommendations} />
      <Trust />
      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />
      <Contact urlHasUtm={urlHasUtm} router={router}/>
      <Content />
      <Footer />
    </>
  )
}

export default pe
