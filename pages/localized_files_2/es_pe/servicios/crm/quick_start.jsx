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

import { dataHeroQuickStart } from '../../../../../utilities/services/crm/hero'
import { whySolQuickStart } from '../../../../../utilities/services/crm/whySolutions'
import { perksQuickStart } from '../../../../../utilities/services/crm/perks'
import { workQuickStart } from '../../../../../utilities/services/crm/workProcess'

import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import { team } from '../../../../../utilities/services/crm/team'
import { crmCases } from '../../../../../utilities/services/crm/cases'
import { contentcrm } from '../../../../../utilities/services/crm/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const quickStart = () => {
  const [urlHasUtm, router] = useUtm()

  return (
    <>
      <Head>
      <title>Quick Start | NEO Consulting</title>
      <meta
        name="description"
        content="Implementación rápida de soluciones CRM y capacitación para asegurar adopción efectiva."
      />
      <meta
        property="og:title"
        content="Quick Start | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Implementación rápida de soluciones CRM y capacitación para asegurar adopción efectiva."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/crm_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router}/>
      <Hero data={dataHeroQuickStart} urlHasUtm={urlHasUtm} router={router} />
      <WhySolutions data={whySolQuickStart} />
      <ServicesPerks data={perksQuickStart} urlHasUtm={urlHasUtm} router={router} />
      <WorkProcess processes={workQuickStart} />
      <SuccessCase cases={crmCases} />
      <Team team={team} chapter={'en CRM y Salesforce '} />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'quickstart'} urlHasUtm={urlHasUtm} router={router} />
      <Content contents={contentcrm} />
      <Footer/>
    </>
  )
}

export default quickStart
