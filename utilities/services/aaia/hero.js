import aaiaHero from '../../../public/assets/Services/Aaia/Hero/aaiaHero.jpg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'

export const dataHeroaaia = {
  title: 'Somos especialistas en',
  subtitle: 'Analítica Digital e Inteligencia Artificial',
  service: 'aaia',
  solution: 'default',
  desc: 'Crea, desarrolla y mejora la relación con tus clientes.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: aaiaHero.src,
  certifications: [
    {
      src: gc.src
    },
    {
      src: ga.src
    }
  ]
}
