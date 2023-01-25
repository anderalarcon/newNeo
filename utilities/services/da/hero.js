import daHero from '../../../public/assets/Services/Da/Hero/daHero.jpg'
import ga from '../../../public/assets/Services/Da/Hero/ga.svg'
import gads from '../../../public/assets/Services/Da/Hero/gads.svg'
import amz from '../../../public/assets/Services/Da/Hero/amazon.svg'
import mads from '../../../public/assets/Services/Da/Hero/mercado_ads.svg'
import cm from '../../../public/assets/Services/Da/Hero/cm.svg'

export const dataHeroda = {
  title: 'Somos expertos en',
  subtitle: 'Publicidad Digital',
  service: 'digital_Ads',
  solution: 'default',
  desc: 'Logra tus objetivos de negocio desde una estrategia rentable en medios digitales pagados.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: daHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: gads.src
    },
    {
      src: amz.src
    },
    {
      src: mads.src
    },
    {
      src: cm.src
    }
  ]
}
