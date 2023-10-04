import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/ComponentesCdeSanFernando/Hero/Hero'
import Reto1 from '../../../components/ComponentesCdeSanFernando/Reto1/Reto1'
import Solucion1 from '../../../components/ComponentesCdeSanFernando/Solucion1/Solucion1'
import Solucion2 from '../../../components/ComponentesCdeSanFernando/Solucion2/Solucion2'
import Resultados1 from '../../../components/ComponentesCdeSanFernando/Resultados1/Resultados1'
import PreFooter from '../../../components/ComponentesCdeSanFernando/PreFooter/PreFooter'
import Head from 'next/head'
import { useUtm } from '../../../utilities/global/customhooks'

const sanfernando = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
      <Head>
        <title>Diseño y optimización de tienda virtual para San Fernando</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router} />
      <Hero />
      <Solucion1 />
      <Reto1 />
      <Solucion2 />
      <Resultados1 />
      <PreFooter />
      <Footer />
    </>
  )
}

export default sanfernando
