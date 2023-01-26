import ecommerceHero from '../../../public/assets/Services/ecommerce/Hero/ecommerceHero.jpg'
import aws from '../../../public/assets/Services/ecommerce/Hero/aws.svg'
import gmp from '../../../public/assets/Services/ecommerce/Hero/gmp.svg'
import gc from '../../../public/assets/Services/ecommerce/Hero/gc.svg'

export const dataHeroecommerce = {
  title: 'Somos especialistas en',
  subtitle: 'E-commerce',
  service: 'ecommerce',
  solution: 'default',
  desc: 'Desarrolla estrategias que impulsen tu e-commerce.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: ecommerceHero.src,
  certifications: [
    {
      src: aws.src
    },
    {
      src: gmp.src
    },
    {
      src: gc.src
    }
  ]
}
