import Bcorp from '../../../components/Bcorp/Bcorp'
import Clients from '../../../components/Clients/Clients'
import Contact from '../../../components/Contact/Contact'
import Header from '../../../components/Header/Header'
import Hero from '../../../components/Hero/Hero'
import Questions from '../../../components/Questions/Questions'
import Trust from '../../../components/Companies/Trust/Trust'
import Region from '../../../components/Region/Region'
import Solutions from '../../../components/Solutions/Solutions'
import Partners from '../../../components/Companies/Partners/Partners'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import { questionsHome } from '../../../utilities/home/questions'
import { recommendations } from '../../../utilities/global/recommendations'
import Content from '../../../components/Content/Content'
import Footer from '../../../components/Footer/Footer'
import { solutionsPeru } from '../../../utilities/home/solutions'
import { peruCases } from '../../../utilities/home/cases'
const mx = () => {
  return (
    <>
      <Header />
      <Hero />
      <Solutions solutions={solutionsPeru} />
      <Partners />
      <SuccessCase cases={peruCases} />
      <Clients recommendations={recommendations} />
      <Trust />
      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />
      <Contact />
      <Content />
      <Footer />
    </>
  )
}

export default mx
