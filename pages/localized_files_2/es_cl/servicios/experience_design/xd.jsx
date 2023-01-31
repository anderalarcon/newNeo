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

import { dataHeroxd } from '../../../../../utilities/services/xd/hero'
import { xdVisions } from '../../../../../utilities/services/xd/visions'
import { xdSolutions } from '../../../../../utilities/services/xd/solutions'
import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'

const xd = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroxd} />
    <Vision defaultVersion={true} visions={xdVisions} desc='Nuestro diferencial viene de entender los objetivos de negocio y unirlo con las necesidades del usuario' />
    <SolutionsChapter solutions={xdSolutions} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default xd
