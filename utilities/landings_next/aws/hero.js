import canalesHero from '../../../public/assets/Landings_next/aws/Hero/awsHero.jpg'
import aws from '../../../public/assets/Landings_next/aws/Certifications/aws.svg'
import aws2 from '../../../public/assets/Landings_next/aws/Certifications/aws2.svg'
import aws3 from '../../../public/assets/Landings_next/aws/Certifications/aws3.svg'
import aws4 from '../../../public/assets/Landings_next/aws/Certifications/aws4.svg'

export const dataHeroAws = {
  title: 'Potencia tu empresa con los',
  subtitle: 'servicios de Amazon Web Service',
  service: '#form',
  solution: '#form',
  desc: 'Desarrolla tus capacidades de data según su estado de madurez con el objetivo de agregar valor al negocio mediante aplicaciones de analítica avanzada.',
  descCert: 'Nuestros consultores están certificados en:',
  mainImg: canalesHero.src,
  certifications: [
    {
      src: aws.src
    },
    {
      src: aws2.src
    },
    {
      src: aws3.src
    },
    {
      src: aws4.src
    }
  ]
}
