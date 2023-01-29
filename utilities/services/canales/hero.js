import canalesHero from '../../../public/assets/Services/Canales/Hero/canalesHero.jpg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gmp from '../../../public/assets/Services/Canales/Certifications/gmp.svg'
import gads from '../../../public/assets/Services/Canales/Certifications/gads.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'

export const dataHeroCanales = {
  title: 'Somos expertos en',
  subtitle: 'Growth Hacking & Canales Digitales',
  service: 'canales-digitales',
  solution: 'default',
  desc: 'Atrae a más clientes a través de Canales digitales y potencia tus resultados con Growth Hacking.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: canalesHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: gmp.src
    },
    {
      src: gads.src
    },
    {
      src: gc.src
    }
  ]
}
