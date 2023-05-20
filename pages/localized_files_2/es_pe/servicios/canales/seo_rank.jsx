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

import { dataHeroSeoRank } from '../../../../../utilities/services/canales/hero'
import { whySolSeoRank } from '../../../../../utilities/services/canales/whySolutions'
import { perksSeoRank } from '../../../../../utilities/services/canales/perks'
import { workSeoRank } from '../../../../../utilities/services/canales/workProcess'

import { questionsCanales } from '../../../../../utilities/services/canales/questions'
import { team } from '../../../../../utilities/services/canales/team'
import { canalesCases } from '../../../../../utilities/services/canales/cases'
import { contentcanales } from '../../../../../utilities/services/canales/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const seoRank = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>SEO con Rank Tracker | NEO Consulting</title>
      <meta
        name="description"
        content="En Neo Consulting planteamos estrategias SEO para generar tráfico orgánico sostenible y relevante para tu sitio web."
      />
      <meta
      property="og:title"
      content="SEO con Rank Tracker | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="En Neo Consulting planteamos estrategias SEO para generar tráfico orgánico sostenible y relevante para tu sitio web."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/canales_digitales_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroSeoRank} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolSeoRank} />
    <ServicesPerks data={perksSeoRank} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workSeoRank} />
    <SuccessCase cases={canalesCases} />
    <Team team={team} chapter={'en Canales Digitales y Growth Hacking'} />
    <Questions questions={questionsCanales} urlHasUtm={urlHasUtm} router={router} />
    <Contact service={'canales-digitales'} solution={'seo-rank-tracker'} />
    <Content contents={contentcanales} />
    <Footer/>
  </>
  )
}

export default seoRank
