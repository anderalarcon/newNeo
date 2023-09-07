import { useUtm } from '../../../utilities/global/customhooks'
import Head from 'next/head'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import Assesments from '../../../components/Assesments/Assesments'

const assesments = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Assesments gratuitos</title>
      {/* <meta
        name="description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      /> */}
      <meta
      property="og:title"
      content="Assesments gratuitos"
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
    <Assesments />
    <Footer/>
  </>
  )
}

export default assesments
