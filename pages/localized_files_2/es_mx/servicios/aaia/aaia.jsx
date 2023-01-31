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

import { dataHeroaaia } from '../../../../../utilities/services/aaia/hero'
import { aaiaSolutions2 } from '../../../../../utilities/services/aaia/solutions'
import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { aaiaVisions } from '../../../../../utilities/services/aaia/visions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'

const aaia = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroaaia} />
    <Vision visions={aaiaVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.'/>
    <SolutionsChapter solutions={aaiaSolutions2} filter={true} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <SuccessCase cases={aaiaCases} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default aaia
