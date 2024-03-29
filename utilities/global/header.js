import basket from '../../public/assets/Header/basket.svg'
import brain from '../../public/assets/Header/brain.svg'
import consult from '../../public/assets/Header/consult.svg'
import download from '../../public/assets/Header/download.svg'
import laptop from '../../public/assets/Header/laptop.svg'
import nodeUser from '../../public/assets/Header/node-user.svg'
import rise from '../../public/assets/Header/Rise.svg'
import stats from '../../public/assets/Header/stats.svg'
import sync from '../../public/assets/Header/Sync.svg'
import techInfo from '../../public/assets/Header/tech-info.svg'
// import aws from '../../public/assets/Header/aws.svg'
import quienes from '../../public/assets/Header/quienes.svg'
import trabaja from '../../public/assets/Header/trabaja.svg'
import bcorp from '../../public/assets/Header/bcorp.svg'
// import videoChat from '../../public/assets/Header/video-chat-line.svg'

export const AccordionData = [
  {
    title: 'Servicios',
    ul: [
      {
        link: '/pe/servicios/analitica-digital-inteligencia-artificial',
        text: 'Analítica Digital e Inteligencia Artificial',
        icon: rise.src
      },
      {
        link: '/pe/servicios/canales-digitales-y-growth-hacking',
        text: 'Canales Digitales y Growth Hacking',
        icon: laptop.src
      },
      {
        link: '/pe/servicios/consultoria-customer-relationship-management',
        text: 'Consultoría CRM',
        icon: consult.src
      },
      {
        link: '/pe/servicios/experience-design',
        text: 'Diseño de Experiencia y Transformación Digital',
        icon: sync.src
      },
      {
        link: '/pe/servicios/consultoria-ecommerce',
        text: 'E-commerce',
        icon: basket.src
      },
      {
        link: '/pe/servicios/headhunting-y-mentoring',
        text: 'Headhunting y Mentoring',
        icon: nodeUser.src
      },
      {
        link: '/pe/servicios/marketing-automation',
        text: 'Marketing Automation',
        icon: techInfo.src
      },
      {
        link: '/pe/servicios/digital-advertising',
        text: 'Publicidad Digital',
        icon: stats.src
      }
    ]
  },
  {
    title: 'Productos',
    ul: [
      {
        link: 'https://neoconsulting.ai/digital-skills',
        text: 'Neo Digital Skills',
        icon: brain.src
      }
    ]
  },
  // {
  //   title: 'Partners',
  //   ul: [
  //     {
  //       link: 'https://neoconsulting.ai/servicios-aws/',
  //       text: 'Soluciones cloud con AWS',
  //       icon: aws.src
  //     }
  //   ]
  // },
  {
    title: 'Recursos',
    ul: [
      {
        link: 'https://neoconsulting.ai/descargables/',
        text: 'Descargables',
        icon: download.src
      },
      // {
      //   link: 'https://neoconsulting.ai/recursos-digitales/#webinars',
      //   text: 'webinars',
      //   icon: videoChat.src
      // },
      {
        link: 'https://neoconsulting.ai/soluciones/assessments',
        text: 'Assessments',
        icon: laptop.src
      }
    ]
  },
  {
    title: 'Sobre Neo',
    ul: [
      {
        link: 'https://neoconsulting.ai/quienes_somos',
        text: '¿Quiénes Somos?',
        icon: quienes.src
      },
      {
        link: 'https://neo-consulting-s-a-c.breezy.hr/',
        text: 'Trabaja en NEO',
        icon: trabaja.src
      },
      {
        link: 'https://neoconsulting.ai/reportes-de-sostenibilidad',
        text: 'Reporte Bcorp',
        icon: bcorp.src
      }
    ]
  },
  {
    title: 'Casos de éxito',
    link: 'https://neoconsulting.ai/casos-de-exito-neo-consulting-ai/'
  },
  { title: 'Blog', link: 'https://neoconsulting.ai/blog-neo' }
]
