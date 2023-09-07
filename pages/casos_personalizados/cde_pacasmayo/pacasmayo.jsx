import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/ComponentesCDE/Hero/Hero'
import Reto1 from '../../../components/ComponentesCDE/Reto1/Reto1'
import Solucion1 from '../../../components/ComponentesCDE/Solucion1/Solucion1'
import Solucion2 from '../../../components/ComponentesCDE/Solucion2/Solucion2'
import Resultados1 from '../../../components/ComponentesCDE/Resultados1/Resultados1'
import PreFooter from '../../../components/ComponentesCDE/PreFooter/PreFooter'
import Head from 'next/head'
import { useUtm } from '../../../utilities/global/customhooks'

const pacasmayo = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
      <Head>
        <title>Transformación Digital en comercialización y distribución industrial.</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router} />
      <Hero />
      <Reto1 />
      <Solucion1 />
      <Solucion2 />
      <Resultados1 />
      <PreFooter />
      <Footer />
    </>
  )
}

export default pacasmayo
