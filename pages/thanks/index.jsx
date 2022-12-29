import Breadscrumb from '../../components/Breadscrumb/Breadscrumb'
import FormHeader from '../../components/Form/_children/FormHeader/FormHeader'
import Hero from '../../components/Thanks/Hero/Hero'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

const Thanks = () => {
  return (
    <>
      <FormHeader />
      <Breadscrumb value={'Gracias'} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}

export default Thanks
