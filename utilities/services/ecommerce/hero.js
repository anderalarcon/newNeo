import ecommerceHero from '../../../public/assets/Services/ecommerce/Hero/ecommerceHero.jpg'
import ga from '../../../public/assets/Services/ecommerce/Hero/ga.svg'
import sf from '../../../public/assets/Services/ecommerce/Hero/salesforce.svg'
import hb from '../../../public/assets/Services/ecommerce/Hero/hubspot.svg'
import ei from '../../../public/assets/Services/ecommerce/Hero/eicom.svg'

export const dataHeroecommerce = {
  title: 'Experiencia, data y estratégia para impulsar tu canal de',
  subtitle: 'E-commerce',
  service: 'ecommerce',
  solution: 'default',
  desc: 'Desarrolla estrategias que impulsen tu e-commerce.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: ecommerceHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: sf.src
    },
    {
      src: hb.src
    },
    {
      src: ei.src
    }
  ]
}
