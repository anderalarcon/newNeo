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

import { dataHeroecommerce } from '../../../../../utilities/services/ecommerce/hero'
import { ecommerceVisions } from '../../../../../utilities/services/ecommerce/visions'
import { ecommerceSolutions } from '../../../../../utilities/services/ecommerce/solutions'
import { team } from '../../../../../utilities/services/ecommerce/team'
import { ecommerceCases } from '../../../../../utilities/services/ecommerce/cases'
import { questionsecommerce } from '../../../../../utilities/services/ecommerce/questions'
import { contentecommerce } from '../../../../../utilities/services/ecommerce/content'

const ecommerce = () => {
  return (
    <>
    <Header/>
    <Hero data={dataHeroecommerce} />
    <Vision defaultVersion={true} visions={ecommerceVisions} desc='Ser socios que aporten visión estratégica y experiencia en la implementación de proyectos de crecimiento digital.' />
    <SolutionsChapter solutions={ecommerceSolutions} />
    <Team team={team} chapter={'en e-commerce'} />
    <SuccessCase cases={ecommerceCases} />
    <Questions questions={questionsecommerce} />
    <Contact service={'ecommerce'} />
    <Content contents={contentecommerce} />
    <Footer/>
  </>
  )
}

export default ecommerce
