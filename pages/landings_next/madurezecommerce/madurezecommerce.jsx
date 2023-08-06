import { useUtm } from '../../../utilities/global/customhooks'
import Head from 'next/head'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import Madurezecommerce from '../../../components/Madurezecommerce/Madurezecommerce'
import Madurezecommerce2 from '../../../components/Madurezecommerce/Madurezecommerce2'
import WorkProcess from '../../../components/Madurezecommerce/WorkProcess'
import { workmadurezecommerce } from '../../../utilities/landings_next/madurezecommerce/madurezecommerce'

const madurezecommerce = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Autodiagnóstico de madurez Estrategia Ecommerce</title>
      {/* <meta
        name="description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      /> */}
      <meta
      property="og:title"
      content="Autodiagnóstico de madurez Estrategia Ecommerce"
      />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      /> */}
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/meta_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Madurezecommerce />
    <WorkProcess processes={workmadurezecommerce} />
    <Madurezecommerce2 />
    <Footer/>
  </>
  )
}

export default madurezecommerce
