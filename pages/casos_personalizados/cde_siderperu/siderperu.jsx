import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/ComponentesCDESiderperu/Hero/Hero'
import Reto1 from '../../../components/ComponentesCDESiderperu/Reto1/Reto1'
import Reto2 from '../../../components/ComponentesCDESiderperu/Reto2/Reto2'
import Solucion1 from '../../../components/ComponentesCDESiderperu/Solucion1/Solucion1'
import Solucion3 from '../../../components/ComponentesCDESiderperu/Solucion3/Solucion1'
import Resultados1 from '../../../components/ComponentesCDESiderperu/Resultados1/Resultados1'
import PreFooter from '../../../components/ComponentesCDESiderperu/PreFooter/PreFooter'
import Head from 'next/head'
import { useUtm } from '../../../utilities/global/customhooks'

const siderperu = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
      <Head>
        <title>Siderperu Estrategia de Transformación Digital</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router} />
      <Hero />
      <Solucion1 />
      <Reto1 />
      <Solucion3 />
      <Reto2 />
      <Resultados1 />
      <PreFooter />
      <Footer />
    </>
  )
}

export default siderperu
