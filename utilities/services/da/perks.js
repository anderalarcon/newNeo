import InhousingImg from '../../../public/assets/Services/Da/Especifics/da-results-image-service1.jpg'
import perkIcon1Inhousing from '../../../public/assets/Services/Da/Especifics/da-results-icon1-service1.svg'
import perkIcon2Inhousing from '../../../public/assets/Services/Da/Especifics/da-results-icon2-service1.svg'
import perkIcon3Inhousing from '../../../public/assets/Services/Da/Especifics/da-results-icon3-service1.svg'

import AuditoriaImg from '../../../public/assets/Services/Da/Especifics/da-results-image-service2.jpg'
import perkIcon1Auditoria from '../../../public/assets/Services/Da/Especifics/da-results-icon1-service2.svg'
import perkIcon2Auditoria from '../../../public/assets/Services/Da/Especifics/da-results-icon2-service2.svg'
import perkIcon3Auditoria from '../../../public/assets/Services/Da/Especifics/da-results-icon3-service2.svg'
import perkIcon4Auditoria from '../../../public/assets/Services/Da/Especifics/da-results-icon4-service2.svg'

export const perksInhousing = {
  coverImg: InhousingImg,
  title: '¿Qué podrás lograr con este servicio?',
  perks: [
    {
      text: 'Incrementar el retorno de inversión en publicidad digital (ROAS) para cumplir con los objetivos de venta.',
      icon: perkIcon1Inhousing
    },
    {
      text: 'Incrementar el performance los principales KPIs de pauta (CTR, CTR, Leads, etc) en el corto y mediano plazo.',
      icon: perkIcon2Inhousing
    },
    {
      text: 'Posibilidad de escalar el servicio absorbiendo al  equipo de manera parcial o total según requiera el cliente. ',
      icon: perkIcon3Inhousing
    }
  ],
  contact: {
    text: 'Contáctanos',
    service: 'digital-ads',
    solution: 'inhousing'
  }
}

export const perksAuditoria = {
  coverImg: AuditoriaImg,
  title: '¿Qué podrás lograr con este servicio?',
  perks: [
    {
      text: 'Obtendrás una descripción detallada de la auditoría, destacando los puntos de mejora, oportunidades y acciones priorizadas. ',
      icon: perkIcon1Auditoria
    },
    {
      text: 'Tener un plan de acción para optimizar el rendimiento de tus campañas publicitarias.',
      icon: perkIcon2Auditoria
    },
    {
      text: 'Aumentar el rendimiento y el retorno de inversión al identificar áreas de mejora en las campañas publicitarias. ',
      icon: perkIcon3Auditoria
    },
    {
      text: 'Posibilidad de escalar este servicio hacia una Consultoría estratégica de Publicidad Digital que supervise la ejecución del plan de acción y genere optimizaciones continuas.',
      icon: perkIcon4Auditoria
    }
  ],
  contact: {
    text: 'Contáctanos',
    service: 'digital-ads',
    solution: 'auditoria'
  }
}
