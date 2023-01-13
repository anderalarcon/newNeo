import canalesHero from '../../../public/assets/Services/Canales/Hero/canalesHero.jpg'
import salesforce from '../../../public/assets/Crm/Hero/salesforce.svg'
import aws from '../../../public/assets/Services/Canales/Certifications/aws.svg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gmp from '../../../public/assets/Services/Canales/Certifications/gmp.svg'
import gads from '../../../public/assets/Services/Canales/Certifications/gads.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'

export const dataHeroCanales = {
  title: 'Somos especialistas en',
  subtitle: 'Canales Digitales y Growth Hacking',
  service: 'canales-digitales',
  solution: 'default',
  desc: 'Atrae más clientes a través de Canales digitales y potencia tus resultados con Growth Hacking.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: canalesHero.src,
  certifications: [
    {
      src: salesforce.src
    },
    {
      src: aws.src
    },
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
