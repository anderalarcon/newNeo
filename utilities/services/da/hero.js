import daHero from '../../../public/assets/Services/Da/Hero/daHero.jpg'
import ga from '../../../public/assets/Services/Da/Hero/ga.svg'
import gads from '../../../public/assets/Services/Da/Hero/gads.svg'
import amz from '../../../public/assets/Services/Da/Hero/amazon.svg'
import mads from '../../../public/assets/Services/Da/Hero/mercado_ads.svg'
import cm from '../../../public/assets/Services/Da/Hero/cm.svg'

import InhousingHero from '../../../public/assets/Services/Da/Especifics/da-hero-image-service1.jpg'
import AuditoriaHero from '../../../public/assets/Services/Da/Especifics/da-hero-image-service2.jpg'

export const dataHeroda = {
  title: 'Somos expertos en',
  subtitle: 'Publicidad Digital',
  service: 'digital-ads',
  solution: 'default',
  desc: 'Logra tus objetivos de negocio desde una estrategia rentable en medios digitales pagados.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: daHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: gads.src
    },
    {
      src: amz.src
    },
    {
      src: mads.src
    },
    {
      src: cm.src
    }
  ]
}

export const dataHeroInhousing = {
  pretitle: 'Inhousing Publicidad Digital',
  title: 'Eleva el desempeño',
  subtitle: 'con un equipo especializado',
  service: 'digital-ads',
  solution: 'inhousing',
  desc: 'Equipo especializado para cumplir objetivos de negocio y mejorar el rendimiento de campañas publicitarias.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: InhousingHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: gads.src
    },
    {
      src: amz.src
    },
    {
      src: mads.src
    },
    {
      src: cm.src
    }
  ]
}

export const dataHeroAuditoria = {
  pretitle: 'Auditoría de Publicidad Digital ',
  title: 'Evalúa tus campañas con',
  subtitle: 'Auditoría performance',
  service: 'digital-ads',
  solution: 'auditoria',
  desc: 'Servicio que nos permite analizar la situación actual de las campañas de publicidad digital, para generar un plan de acción especializado enfocado a KPIs de conversión y lograr mayores resultados.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: AuditoriaHero.src,
  certifications: [
    {
      src: ga.src
    },
    {
      src: gads.src
    },
    {
      src: amz.src
    },
    {
      src: mads.src
    },
    {
      src: cm.src
    }
  ]
}
