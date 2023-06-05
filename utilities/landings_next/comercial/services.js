import principal from '../../../public/assets/Comercial/principal.jpg'

import icon11 from '../../../public/assets/Comercial/icon1_1.svg'
import icon12 from '../../../public/assets/Comercial/icon1_2.svg'
import icon13 from '../../../public/assets/Comercial/icon1_3.svg'

import icon21 from '../../../public/assets/Comercial/icon2_1.svg'
import icon22 from '../../../public/assets/Comercial/icon2_2.svg'
import icon23 from '../../../public/assets/Comercial/icon2_3.svg'

import icon31 from '../../../public/assets/Comercial/icon3_1.svg'

export const servicescomercial = {
  service1: [
    {
      reverse: true,
      coverImg: principal.src,
      title1: 'Indicadores personalizados',
      title2: 'Data en tiempo real',
      title3: 'Vigila a tu competencia',
      conten1:
        'Te permite acceder a indicadores personalizados a las necesidades de tu negocio.',
      conten2:
        'Dispondrás de data en tiempo real para tomar mejores decisiones.',
      conten3:
        'Podrás realizar benchmark de tu competencia y  las tendencias de tu rubro para potenciar tus iniciativas.',
      icon1: icon11.src,
      icon2: icon12.src,
      icon3: icon13.src,
      contactUrl: '#form'
    }
  ],

  service2: [
    {
      reverse: true,
      coverImg: principal.src,
      title1: 'Mejora la colaboración',
      title2: 'Agiliza la experimentación',
      title3: 'Reportes en tiempo récord',
      conten1:
        'Facilita el trabajo entre tus especialistas SEO (estratégico y técnico).',
      conten2:
        'Agiliza la iteración y experimentación.',
      conten3:
        'Agiliza la obtención de reportes personalizados al negocio.',
      icon1: icon21.src,
      icon2: icon22.src,
      icon3: icon23.src,
      contactUrl: '#form'
    }
  ],

  service3: [
    {
      reverse: true,
      coverImg: principal.src,
      title1: '',
      title2: 'Medición de resultados en tiempo real',
      title3: '',
      conten1:
        '',
      conten2:
        'Al medir lo que importa y en tiempo real, verás cómo tus acciones de SEO impactan en los resultados de negocio; permitiéndote tomar mejores decisiones para potenciar tu estrategia y locación de esfuerzos.',
      conten3:
        '',
      icon1: '',
      icon2: icon31.src,
      icon3: '',
      contactUrl: '#form'
    }
  ]
}
