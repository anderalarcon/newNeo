import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'

import { dataHeroaaia } from '../../../../../utilities/services/aaia/hero'
import { aaiaSolutions2 } from '../../../../../utilities/services/aaia/solutions'
import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import { aaiaVisions } from '../../../../../utilities/services/aaia/visions'

const aaia = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroaaia} />
    <Vision visions={aaiaVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.'/>
    <SolutionsChapter solutions={aaiaSolutions2} filter={true} />
    <Team team={team} chapter={'en Marketing Automation'} />
    <SuccessCase cases={aaiaCases} />
    <Questions questions={questionsCrm} />
    <Contact service={'ai-automation'} />
    <Footer/>
  </>
  )
}

export default aaia
