import HeadHuntingImg from '../../../public/assets/Services/Dts/Especifics/dts-results-image-service1.jpg'
import perkIcon1HeadHunting from '../../../public/assets/Services/Dts/Especifics/dts-results-icon1-service1.svg'
import perkIcon2HeadHunting from '../../../public/assets/Services/Dts/Especifics/dts-results-icon2-service1.svg'
import perkIcon3HeadHunting from '../../../public/assets/Services/Dts/Especifics/dts-results-icon3-service1.svg'

import OutsourcingImg from '../../../public/assets/Services/Dts/Especifics/dts-results-image-service2.jpg'
import perkIcon1Outsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon1-service2.svg'
import perkIcon2Outsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon2-service2.svg'
import perkIcon3Outsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon3-service2.svg'
import perkIcon4Outsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon4-service2.svg'

import MentoryOutsourcingImg from '../../../public/assets/Services/Dts/Especifics/dts-results-image-service3.jpg'
import perkIcon1MentoryOutsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon1-service3.svg'
import perkIcon2MentoryOutsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon2-service3.svg'
import perkIcon3MentoryOutsourcing from '../../../public/assets/Services/Dts/Especifics/dts-results-icon3-service3.svg'

export const perksHeadHunting = {
  coverImg: HeadHuntingImg,
  title: '¿Qué podrás lograr con este servicio?',
  perks: [
    {
      text: 'Podrás seleccionar personal en menor tiempo tras la automatización de las tareas del proceso de selección.',
      icon: perkIcon1HeadHunting
    },
    {
      text: 'Evaluar las habilidades  y conocimientos específicos para el puesto requerido.',
      icon: perkIcon2HeadHunting
    },
    {
      text: 'Mejorar el rendimiento del equipo al añadir un perfil altamente capacitado',
      icon: perkIcon3HeadHunting
    }
  ],
  contact: {
    text: 'Contáctanos',
    service: 'digital-talent-solution',
    solution: 'headhunting'
  }
}

export const perksOutsourcing = {
  coverImg: OutsourcingImg,
  title: '¿Qué podrás lograr con este servicio?',
  perks: [
    {
      text: 'Externalizar el seguimiento constante del perfil para mejorar los resultados.',
      icon: perkIcon1Outsourcing
    },
    {
      text: 'Seleccionar personal en menor tiempo al automatizar las tareas del proceso de selección.',
      icon: perkIcon2Outsourcing
    },
    {
      text: 'Evaluar las habilidades  y conocimientos específicos para el puesto.',
      icon: perkIcon3Outsourcing
    },
    {
      text: 'Mejorar el rendimiento del equipo al añadir un perfil altamente capacitado.',
      icon: perkIcon4Outsourcing
    }
  ],
  contact: {
    text: 'Contáctanos',
    service: 'digital-talent-solution',
    solution: 'outsourcing'
  }
}

export const perksMentoryOutsourcing = {
  coverImg: MentoryOutsourcingImg,
  title: '¿Qué podrás lograr con este servicio?',
  perks: [
    {
      text: 'Formar perfiles que fomenten la armonía en el trabajo y se desenvuelvan bien con los miembros de su equipo.',
      icon: perkIcon1MentoryOutsourcing
    },
    {
      text: 'Mantener a un perfil especialista motivado con menor posibilidad de rotación.',
      icon: perkIcon2MentoryOutsourcing
    },
    {
      text: 'Podrás seguir el crecimiento del perfil a través de reportes con KPIs trabajados.',
      icon: perkIcon3MentoryOutsourcing
    }
  ],
  contact: {
    text: 'Contáctanos',
    service: 'digital-talent-solution',
    solution: 'outsourcing-y-mentoring'
  }
}
