import style from './Footer.module.scss'

// import Accordion from './_children/Accordion/Accordion'
// import linkedin from '../../public/assets/Footer/linkedin.svg'
// import fb from '../../public/assets/Footer/fb.svg'
// import insta from '../../public/assets/Footer/insta.svg'
// import afiliation from '../../public/assets/Footer/afiliation.png'
// import yt from '../../public/assets/Footer/yt.svg'
// import eccom2020 from '../../public/assets/Awards/eccom-award-2020.png'
// import eccom2021 from '../../public/assets/Awards/eccom-award-2021.png'
// import empresa from '../../public/assets/Awards/empresa.png'
// import aws from '../../public/assets/Partners/aws.png'
// import googleCloud from '../../public/assets/Partners/google-cloud.png'
// import googleMarketingPlatform from '../../public/assets/Partners/google-marketing-platform.png'
// import hubspot from '../../public/assets/Partners/hubspot.png'
// import salesforce from '../../public/assets/Partners/salesforce.png'
import complaintsBook from '../../public/assets/Footer/complaints-book.png'
import logoNeo from '../../public/assets/logos/logo-white.png'

import { motion } from 'framer-motion'
import { footerVariants } from '../../utilities/global/motion'

const Footer = () => {
  // const AccordionData = [
  //   {
  //     title: 'Servicios',
  //     ul: [
  //       {
  //         link: '/pe/servicios/analitica-digital-inteligencia-artificial',
  //         text: 'Analítica Digital e Inteligencia Artificial'
  //       },
  //       { link: '/pe/servicios/canales-digitales-y-growth-hacking', text: 'Canales Digitales y Growth Hacking' },
  //       { link: '/pe/servicios/consultoria-customer-relationship-management', text: 'Consultoría CRM' },
  //       { link: '/pe/servicios/experience-design', text: 'Diseño de Experiencia' },
  //       { link: '/pe/servicios/consultoria-ecommerce', text: 'E-commerce' },
  //       { link: '/pe/servicios/headhunting-y-mentoring', text: 'Headhunting y Mentoring' },
  //       { link: '/pe/servicios/marketing-automation', text: 'Marketing Automation' },
  //       { link: '/pe/servicios/digital-advertising', text: 'Publicidad Digital' }
  //     ]
  //   },
  //   {
  //     title: 'Somos NEO',
  //     ul: [
  //       { link: 'https://neoconsulting.ai/quienes-somos', text: 'Sobre nosotros' },
  //       { link: 'https://neo-consulting-s-a-c.breezy.hr/', text: 'Trabaja en NEO' },
  //       { link: 'https://wordpress.neoconsulting.ai/wp-content/uploads/2022/06/Reporte-de-Sostenibilidad-2021-Neo-Consulting.pdf', text: 'Guía Bcorp' }
  //     ]
  //   },
  //   {
  //     title: 'Países',
  //     ul: [
  //       {
  //         link: 'https://neoconsulting.ai/pe',
  //         text: 'Perú'
  //       },
  //       { link: 'https://neoconsulting.ai/co', text: 'Colombia' },
  //       { link: 'https://neoconsulting.ai/cl', text: 'Chile' },
  //       { link: 'https://neoconsulting.ai/mx', text: 'México' }
  //     ]
  //   },
  //   {
  //     title: 'Recursos',
  //     ul: [
  //       { link: 'https://neoconsulting.ai/blog-neo', text: 'Blog' },
  //       { link: 'https://neoconsulting.ai/descargables/', text: 'Descargables' }
  //       // { link: 'https://www.youtube.com/@neoconsulting/videos', text: 'Webinars' }
  //     ]
  //   }
  // ]

  return (
    <div className={style.footer}>
      <motion.div variants={footerVariants} initial="hidden" whileInView="show">

      <div className={style.footer_bottom}>
        <div className={style.footer_bottom_images}>
          <img src={logoNeo.src} alt='neo' />
          <p>
            © 2023 NEO Consulting - Todos los derechos reservados | <span><a href="https://neoconsulting.ai/politica-de-privacidad">Política de
            privacidad</a></span> | <span><a href="https://neoconsulting.ai/politicas-cookies">Política de Cookies</a></span>
          </p>
          <img src={complaintsBook.src} alt='complaintsBook' />
        </div>
        <p>
          © 2023 NEO Consulting - Todos los derechos reservados | Política de
          privacidad | Terminos de uso | Política de Cookies
        </p>
      </div>
      </motion.div>
    </div>
  )
}

export default Footer
