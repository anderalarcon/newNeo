import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Trajectory from '../../../components/Trajectory/Trajectory'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import Trust from '../../../components/Companies/Trust/Trust'
import Footer from '../../../components/Footer/Footer'
import Izq from '../../../components/IzqDer/Izq'

import Hero from '../../../components/HeoLandingsSeparate/Heroizq'

import { dataHeroAws } from '../../../utilities/landings_next/izq/hero'
import { trajectoriesHome } from '../../../utilities/quienes_somos/trajectories'
import { canalesCases } from '../../../utilities/services/canales/cases'

const izquierda = () => {
  return (
    <>
    <Head>
        <title>Quienes Somos</title>
        <meta
          name="description"
          content="Descrubre mas sobre nosotros"
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Quienes Somos"
        />
        <meta
          property="og:description"
          content="Descrubre mas sobre nosotros"
        />
        <script defer src="/js/gtm.js"></script>
        <script defer src="/js/hotjar.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header />
    <Hero data={dataHeroAws} />
    <Trajectory trajectories={trajectoriesHome} />
    <Izq />
    <SuccessCase cases={canalesCases} />
    <Trust />
    <Footer />
    </>
  )
}

export default izquierda
