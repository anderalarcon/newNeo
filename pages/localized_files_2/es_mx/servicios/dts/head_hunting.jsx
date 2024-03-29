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

import { whySolHeadHunting } from '../../../../../utilities/services/dts/whySolutions'
import { perksHeadHunting } from '../../../../../utilities/services/dts/perks'
import { workHeadHunting } from '../../../../../utilities/services/dts/workProcess'
import { dataHeroHeadHunting } from '../../../../../utilities/services/dts/hero'

import { team } from '../../../../../utilities/services/dts/team'
import { dtsCases } from '../../../../../utilities/services/dts/cases'
import { questionsdts } from '../../../../../utilities/services/dts/questions'
import { contentdts } from '../../../../../utilities/services/dts/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const headHunting = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Consultoria en Marketing Digital | NEO Consulting</title>
        <meta
          name="description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/dts_home.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Consultoria en Marketing Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroHeadHunting} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolHeadHunting} />
    <ServicesPerks data={perksHeadHunting} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workHeadHunting} />
    <SuccessCase cases={dtsCases} />
    <Team team={team} chapter={'en Headhunting y Mentoring'} />
    <Questions questions={questionsdts} />
    <Contact service={'digital-talent-solution'} solution={'headhunting'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentdts} />
    <Footer/>
  </>
  )
}

export default headHunting
