import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'

import { crmSolutions } from '../../../../../utilities/services/crm/solutions'
import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import { team } from '../../../../../utilities/services/crm/team'
import { dataHero } from '../../../../../utilities/services/crm/hero'
import { crmCases } from '../../../../../utilities/services/crm/cases'

const crm = () => {
  return (
    <>
      <Header/>
      <Hero data={dataHero} />
      <Vision defaultVersion={false}/>
      <SolutionsChapter solutions={crmSolutions} />
      <Team team={team} chapter={'en CRM y Salesforce '} />
      <SuccessCase cases={crmCases} />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} />
      <Footer/>
    </>
  )
}

export default crm
