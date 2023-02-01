import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'

import { dataHeromkt } from '../../../../../utilities/services/mkt/hero'
import { mktSolutions } from '../../../../../utilities/services/mkt/solutions'
import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { mktVisions } from '../../../../../utilities/services/mkt/visions'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
const mkt = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeromkt} />
    <Vision visions={mktVisions} desc={'Nuestro diferencial viene de entender los objetivos de negocio capitalizando la Data'}/>
    <SolutionsChapter solutions={mktSolutions} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <SuccessCase cases={mktCases} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default mkt