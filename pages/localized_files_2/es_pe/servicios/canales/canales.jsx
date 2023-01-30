import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Team from '../../../../../components/Team/Team'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'

import { canalesSolutions } from '../../../../../utilities/services/canales/solutions'
import { questionsCanales } from '../../../../../utilities/services/canales/questions'
import { team } from '../../../../../utilities/services/canales/team'
import { dataHeroCanales } from '../../../../../utilities/services/canales/hero'
import { canalesCases } from '../../../../../utilities/services/canales/cases'
import { canalesVisions } from '../../../../../utilities/services/canales/visions'
import { contentcanales } from '../../../../../utilities/services/canales/content'

const canales = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroCanales} />
    <Vision defaultVersion={true} visions={canalesVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.' />
    <SolutionsChapter solutions={canalesSolutions} />
    <Team team={team} chapter={'en Canales Digitales y Growth Hacking'} />
    <SuccessCase cases={canalesCases} />
    <Questions questions={questionsCanales} />
    <Contact service={'canales-digitales'} />
    <Content contents={contentcanales} />
    <Footer/>
  </>
  )
}

export default canales
