import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Team from '../../../../../components/Team/Team'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { dataHeroMarketingContenidos } from '../../../../../utilities/services/canales/hero'
import { whySolMarketingContenidos } from '../../../../../utilities/services/canales/whySolutions'
import { perksMarketingContenidos } from '../../../../../utilities/services/canales/perks'
import { workMarketingContenidos } from '../../../../../utilities/services/canales/workProcess'

import { questionsCanales } from '../../../../../utilities/services/canales/questions'
import { team } from '../../../../../utilities/services/canales/team'
import { canalesCases } from '../../../../../utilities/services/canales/cases'
import { contentcanales } from '../../../../../utilities/services/canales/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const marketingContenidos = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Consultoria Growth Hacking | NEO Consulting</title>
      <meta
        name="description"
        content="Consultoria de Growth Hacking por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
      property="og:title"
      content="Consultoria Growth Hacking | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Consultoria de Growth Hacking por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2021/06/duotone-1-1-683x1024.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header/>
    <Hero data={dataHeroMarketingContenidos} isSolution={true} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMarketingContenidos} />
    <ServicesPerks data={perksMarketingContenidos} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMarketingContenidos} />
    <SuccessCase cases={canalesCases} />
    <Team team={team} chapter={'en Canales Digitales y Growth Hacking'} />
    <Questions questions={questionsCanales} />
    <Contact service={'canales-digitales'} solution={'marketing-de-contenidos'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentcanales} />
    <Footer/>
  </>
  )
}

export default marketingContenidos
