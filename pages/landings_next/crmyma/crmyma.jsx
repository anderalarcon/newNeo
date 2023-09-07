import { useUtm } from '../../../utilities/global/customhooks'
import Head from 'next/head'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import Crmyma from '../../../components/Crmyma/Crmyma'
import Crmyma2 from '../../../components/Crmyma/Crmyma2'
import WorkProcess from '../../../components/Crmyma/WorkProcess'
import { workcrmyma } from '../../../utilities/landings_next/crmyma/workcrmyma'

const crmyma = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Autodiagnóstico de madurez de CRM y Marketing Automation</title>
      {/* <meta
        name="description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      /> */}
      <meta
      property="og:title"
      content="Autodiagnóstico de madurez de CRM y Marketing Automation"
      />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:description"
        content="Descubre las soluciones de optimización de conversiones (CRO) con VWO. Mejora tu tasa de conversión y maximiza el rendimiento de tu sitio web con pruebas A/B, personalización y análisis de datos."
      /> */}
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/08/meta_crm.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Crmyma />
    <WorkProcess processes={workcrmyma} />
    <Crmyma2 />
    <Footer/>
  </>
  )
}

export default crmyma
