import xdHero from '../../../public/assets/Services/Xd/Hero/xdHero.jpg'
import nng from '../../../public/assets/Services/Xd/Hero/nng.svg'
import ux from '../../../public/assets/Services/Xd/Hero/ux-pm.svg'
import ga from '../../../public/assets/Services/Xd/Hero/ga.svg'

export const dataHeroxd = {
  title: 'Somos expertos en',
  subtitle: 'Diseño de experiencia y Transformación Digital',
  service: 'experience-design',
  solution: 'default',
  desc: 'Somos expertos en diseño de experiencia y transformación digital.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: xdHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: nng.src
    },
    {
      src: ux.src
    }
  ]
}
