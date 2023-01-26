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

import { dataHeroda } from '../../../../../utilities/services/da/hero'
import { daVisions } from '../../../../../utilities/services/da/visions'
import { daSolutions } from '../../../../../utilities/services/da/solutions'
import { team } from '../../../../../utilities/services/da/team'
import { daCases } from '../../../../../utilities/services/da/cases'
import { questionsda } from '../../../../../utilities/services/da/questions'
import { contentda } from '../../../../../utilities/services/da/content'

const da = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroda} />
    <Vision defaultVersion={true} visions={daVisions} desc='Nuestro diferencial viene de entender los objetivos de negocio capitalizando la Data' />
    <SolutionsChapter solutions={daSolutions} />
    <Team team={team} chapter={'en e-commerce'} />
    <SuccessCase cases={daCases} />
    <Questions questions={questionsda} />
    <Contact service={'digital-ads'} />
    <Content contents={contentda} />
    <Footer/>
  </>
  )
}

export default da
