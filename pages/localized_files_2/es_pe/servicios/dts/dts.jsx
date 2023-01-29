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

import { dataHerodts } from '../../../../../utilities/services/dts/hero'
import { dtsVisions } from '../../../../../utilities/services/dts/visions'
import { dtsSolutions } from '../../../../../utilities/services/dts/solutions'
import { team } from '../../../../../utilities/services/dts/team'
import { dtsCases } from '../../../../../utilities/services/dts/cases'
import { questionsdts } from '../../../../../utilities/services/dts/questions'
import { contentdts } from '../../../../../utilities/services/dts/content'

const dts = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHerodts} />
    <Vision defaultVersion={true} visions={dtsVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.' />
    <SolutionsChapter solutions={dtsSolutions} />
    <Team team={team} chapter={'en Headhunting y Mentoring'} />
    <SuccessCase cases={dtsCases} />
    <Questions questions={questionsdts} />
    <Contact service={'digital-talent-solution'} />
    <Content contents={contentdts} />
    <Footer/>
  </>
  )
}

export default dts
