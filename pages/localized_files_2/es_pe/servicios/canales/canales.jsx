import Hero from '../../../../../components/Crm/Hero/Hero'
// import Vision from '../../../../../components/Crm/Vision/Vision'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import { canalesSolutions } from '../../../../../utilities/services/canales/solutions'
import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import Team from '../../../../../components/Team/Team'
import { team } from '../../../../../utilities/services/canales/team'
import { dataHeroCanales } from '../../../../../utilities/services/canales/hero'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import { canalesCases } from '../../../../../utilities/services/canales/cases'
const canales = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroCanales} />
    {/* <Vision /> */}
    <SolutionsChapter solutions={canalesSolutions} />
    <Team team={team} chapter={'canales digitales'} />
    <SuccessCase cases={canalesCases} />
    <Questions questions={questionsCrm} />
    <Contact service={'canales-digitales'} />
    <Footer/>
  </>
  )
}

export default canales
