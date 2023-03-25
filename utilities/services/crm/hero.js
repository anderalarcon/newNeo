import hero from '../../../public/assets/Services/Crm/Hero/heroCrm.jpg'
import administrator from '../../../public/assets/Services/Crm/Certifications/administrator.svg'
import inboud from '../../../public/assets/Services/Crm/Certifications/inboudmkt.svg'
import mktadmin from '../../../public/assets/Services/Crm/Certifications/mktadmin.svg'
import mktcloud from '../../../public/assets/Services/Crm/Certifications/mktcloud.svg'
import sales from '../../../public/assets/Services/Crm/Certifications/sales.svg'
import sfcloud from '../../../public/assets/Services/Crm/Certifications/sfcloud.svg'
import software from '../../../public/assets/Services/Crm/Certifications/software.svg'

import FullServiceHero from '../../../public/assets/Services/Crm/Especifics/crm-hero-image-service1.jpg'
import AcceleratorHero from '../../../public/assets/Services/Crm/Especifics/crm-hero-image-service2.jpg'
import QuickStartHero from '../../../public/assets/Services/Crm/Especifics/crm-hero-image-service3.jpg'

export const dataHero = {
  title: 'Somos expertos en',
  subtitle: 'CRM',
  service: 'crm',
  solution: 'default',
  desc: 'Crea, desarrolla y mejora la relación con tus clientes.',
  descCert: 'Nuestros consultores de CRM están certificados en:',
  mainImg: hero.src,
  certifications: [
    {
      src: sfcloud.src
    },
    {
      src: mktcloud.src
    },
    {
      src: administrator.src
    },
    {
      src: mktadmin.src
    },
    {
      src: inboud.src
    },
    {
      src: sales.src
    },
    {
      src: software.src
    }
  ]
}

export const dataHeroFullService = {
  pretitle: 'Full Service CRM',
  title: 'Logra tus resultados con una',
  subtitle: 'estrategia basada en datos',
  service: 'crm',
  solution: 'default',
  desc: 'Definimos toda la estrategia y el funcionamiento de su plataforma CRM con un enfoque multicanal basado en datos para la gestión y el análisis de campañas.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: FullServiceHero.src,
  certifications: [
    {
      src: sfcloud.src
    },
    {
      src: mktcloud.src
    },
    {
      src: administrator.src
    },
    {
      src: mktadmin.src
    },
    {
      src: inboud.src
    },
    {
      src: sales.src
    },
    {
      src: software.src
    }
  ]
}

export const dataHeroAccelerator = {
  pretitle: 'Accelerator CRM',
  title: 'Logra tus resultados de forma',
  subtitle: 'rápida y personalizadas',
  service: 'crm',
  solution: 'default',
  desc: 'Diseño y ejecución de soluciones específicas y de corta duración (2-4 meses), con foco en resultados de negocio inmediatos.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: AcceleratorHero.src,
  certifications: [
    {
      src: sfcloud.src
    },
    {
      src: mktcloud.src
    },
    {
      src: administrator.src
    },
    {
      src: mktadmin.src
    },
    {
      src: inboud.src
    },
    {
      src: sales.src
    },
    {
      src: software.src
    }
  ]
}

export const dataHeroQuickStart = {
  pretitle: 'Quick Start',
  title: 'Configuramos y potenciamos',
  subtitle: 'tu estrategia de CRM',
  service: 'crm',
  solution: 'default',
  desc: 'Implementación rápida y efectiva de soluciones CRM, que incluye la configuración de procesos, informes y carga de datos en el software, además de capacitación al equipo para garantizar adopción de la herramienta.',
  descCert: 'Nuestros analistas están certificados en:',
  mainImg: QuickStartHero.src,
  certifications: [
    {
      src: sfcloud.src
    },
    {
      src: mktcloud.src
    },
    {
      src: administrator.src
    },
    {
      src: mktadmin.src
    },
    {
      src: inboud.src
    },
    {
      src: sales.src
    },
    {
      src: software.src
    }
  ]
}
