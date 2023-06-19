import Head from 'next/head'
import Hero from '../../../components/HeoLandingsSeparate/Herovwo'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import Trust from '../../../components/Companies/Trust/Trust'
import Vwocomp2 from '../../../components/Vwo/Vwocomp2'
import Vwocomp3 from '../../../components/Vwo/Vwocomp3'
import Vwocomp4 from '../../../components/Vwo/Vwocomp4'
import Embedform from '../../../components/Vwo/Embedform'

import { dataHeroVwo } from '../../../utilities/landings_next/vwo/hero'
import { useUtm } from '../../../utilities/global/customhooks'

const vwo = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Soluciones de CRO con VWO - Neo Consulting | Optimización de Conversiones</title>
      <meta
        name="description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      />
      <meta
      property="og:title"
      content="Soluciones de CRO con VWO - Neo Consulting | Optimización de Conversiones"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/06/vwo.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroVwo} urlHasUtm={urlHasUtm} router={router} />
    <Vwocomp2 />
    <Vwocomp3 />
    <Vwocomp4 />
    <Trust />
    <Embedform />
    <Footer/>
  </>
  )
}

export default vwo
