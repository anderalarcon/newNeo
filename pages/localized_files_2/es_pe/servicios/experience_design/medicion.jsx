import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'
import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { dataMedicion } from '../../../../../utilities/services/xd/hero'
import { whySolMedicion } from '../../../../../utilities/services/xd/whySolutions'
import { perksMedicion } from '../../../../../utilities/services/xd/perks'
import { workMedicion } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const medicion = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Medición de experiencia de usuario</title>
        <meta
          name="description"
          content="Optimiza la experiencia de usuario. Hacemos seguimiento y revisamos la data de los consumidores para mejorar y/o optimizar los pain points identificados."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Medición de experiencia de usuario"
        />
        <meta
          property="og:description"
          content="Optimiza la experiencia de usuario. Hacemos seguimiento y revisamos la data de los consumidores para mejorar y/o optimizar los pain points identificados."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataMedicion} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMedicion} />
    <ServicesPerks data={perksMedicion} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMedicion} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='medicion-de-experiencia' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default medicion
