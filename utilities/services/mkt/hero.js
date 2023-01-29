import mktHero from '../../../public/assets/Services/Mkt/Hero/mktHero.jpg'
import salesforce from '../../../public/assets/Crm/Hero/salesforce.svg'
import aws from '../../../public/assets/Services/Canales/Certifications/aws.svg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gmp from '../../../public/assets/Services/Canales/Certifications/gmp.svg'
import gads from '../../../public/assets/Services/Canales/Certifications/gads.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'

export const dataHeromkt = {
  title: 'Somos expertos en',
  subtitle: 'Marketing Automation',
  service: 'mkt-automation',
  solution: 'default',
  desc: 'Automatiza acciones, entrega contenido personalizado y fideliza a los clientes con nuestras soluciones.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: mktHero.src,
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
