import aaiaHero from '../../../public/assets/Services/Aaia/Hero/aaiaHero.jpg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'
import aws from '../../../public/assets/Services/Canales/Certifications/aws.svg'

export const dataHeroaaia = {
  title: 'Somos expertos en',
  subtitle: 'Analítica Digital e Inteligencia Artificial',
  service: 'aaia',
  solution: 'default',
  desc: 'Mide, visualiza y capitaliza la data de tu empresa.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: aaiaHero.src,
  certifications: [
    {
      src: gc.src
    },
    {
      src: aws.src
    },
    {
      src: ga.src
    }
  ]
}
