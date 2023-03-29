import canalesHero from '../../../public/assets/Services/Canales/Hero/canalesHero.jpg'
import ga from '../../../public/assets/Services/Canales/Certifications/ga.svg'
import gmp from '../../../public/assets/Services/Canales/Certifications/gmp.svg'
import gads from '../../../public/assets/Services/Canales/Certifications/gads.svg'
import gc from '../../../public/assets/Services/Canales/Certifications/gc.svg'

import MarketingContenidosHero from '../../../public/assets/Services/Canales/Especifics/cd-hero-image-service1.jpg'
import GrowthHackingHero from '../../../public/assets/Services/Canales/Especifics/cd-hero-image-service2.jpg'
import SeoRankHero from '../../../public/assets/Services/Canales/Especifics/cd-hero-image-service3.jpg'

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

export const dataHeroMarketingContenidos = {
  pretitle: 'Marketing de contenidos',
  title: 'Creamos contenido relevante para',
  subtitle: 'conectar con tu audiencia',
  service: 'canales-digitales',
  solution: 'marketing-de-contenidos',
  desc: 'Generamos contenido relevante, que permite lograr objetivos de negocio al empatizar con las necesidades del consumidor.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: MarketingContenidosHero.src,
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

export const dataHeroGrowthHacking = {
  pretitle: 'Growth Hacking',
  title: 'Atrae y reten clientes',
  subtitle: 'experimentando y usando data',
  service: 'canales-digitales',
  solution: 'growth-hacking',
  desc: 'Hacemos crecer tu negocio trabajando bajo la metodología de Growth Hacking, con el fin de adquirir y retener clientes a través de análisis de datos, técnicas de marketing y automatización.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: GrowthHackingHero.src,
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

export const dataHeroSeoRank = {
  pretitle: 'SEO con Rank Tracker',
  title: 'Potencia tu estrategia SEO a través de la',
  subtitle: 'data en tiempo real',
  service: 'canales-digitales',
  solution: 'seo-rank-tracker',
  desc: 'Visualiza el posicionamiento orgánico y absoluto en Google incluyendo el uso de pauta, tanto de tu empresa como la de tus competidores.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: SeoRankHero.src,
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
