import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/ComponentesCDEAbbott/Hero/Hero'
// import Reto1 from '../../../components/ComponentesCDEAbbott/Reto1/Reto1'
import Reto2 from '../../../components/ComponentesCDEAbbott/Reto2/Reto2'
import Solucion1 from '../../../components/ComponentesCDEAbbott/Solucion1/Solucion1'
import Solucion3 from '../../../components/ComponentesCDEAbbott/Solucion3/Solucion1'
import Resultados1 from '../../../components/ComponentesCDEAbbott/Resultados1/Resultados1'
import PreFooter from '../../../components/ComponentesCDEAbbott/PreFooter/PreFooter'
import Head from 'next/head'
import { useUtm } from '../../../utilities/global/customhooks'

const abbott = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
      <Head>
        <title>Assessment Global de Ecommerce</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router} />
      <Hero />
      <Solucion1 />
      {/* <Reto1 /> */}
      <Solucion3 />
      <Reto2 />
      <Resultados1 />
      <PreFooter />
      <Footer />
    </>
  )
}

export default abbott
