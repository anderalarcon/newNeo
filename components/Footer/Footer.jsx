import style from './Footer.module.scss'

import Accordion from './_children/Accordion/Accordion'
import linkedin from '../../public/assets/Footer/linkedin.svg'
import fb from '../../public/assets/Footer/fb.svg'
import insta from '../../public/assets/Footer/insta.svg'
import afiliation from '../../public/assets/Footer/afiliation.png'
import yt from '../../public/assets/Footer/yt.svg'
import eccom2020 from '../../public/assets/Awards/eccom-award-2020.png'
import eccom2021 from '../../public/assets/Awards/eccom-award-2021.png'
import empresa from '../../public/assets/Awards/empresa.png'
import aws from '../../public/assets/Partners/aws.png'
import googleCloud from '../../public/assets/Partners/google-cloud.png'
import googleMarketingPlatform from '../../public/assets/Partners/google-marketing-platform.png'
import hubspot from '../../public/assets/Partners/hubspot.png'
import salesforce from '../../public/assets/Partners/salesforce.png'
import complaintsBook from '../../public/assets/Footer/complaints-book.png'
import logoNeo from '../../public/assets/Footer/logo-neo.png'

import { motion } from 'framer-motion'
import { footerVariants } from '../../utilities/global/motion'

const Footer = () => {
  const AccordionData = [
    {
      title: 'Servicios',
      ul: [
        {
          link: '/pe/servicios/analitica-digital-inteligencia-artificial',
          text: 'Analítica Digital e Inteligencia Artificial'
        },
        { link: '/pe/servicios/canales-digitales-y-growth-hacking', text: 'Canales digitales y Growth Hacking' },
        { link: '/pe/servicios/consultoria-customer-relationship-management', text: 'Consultoría CRM' },
        { link: '/pe/servicios/experience-design', text: 'Diseño de experiencia' },
        { link: '/pe/servicios/consultoria-ecommerce', text: 'E-commerce' },
        { link: '/pe/servicios/headhunting-y-mentoring', text: 'Headhunting y Mentoring' },
        { link: '/pe/servicios/marketing-automation', text: 'Marketing Automation' },
        { link: '/pe/servicios/digital-advertising', text: 'Publicidad Digital' }
      ]
    },
    {
      title: 'Somos NEO',
      ul: [
        { link: 'https://neoconsulting.ai/quienes-somos', text: 'Sobre nosotros' },
        { link: 'https://neo-consulting-s-a-c.breezy.hr/', text: 'Bolsa de trabajo' },
        { link: 'https://wordpress.neoconsulting.ai/wp-content/uploads/2022/06/Reporte-de-Sostenibilidad-2021-Neo-Consulting.pdf', text: 'Guía Bcorp' }
      ]
    },
    {
      title: 'Países',
      ul: [
        {
          link: 'https://neoconsulting.ai/pe',
          text: 'Perú'
        },
        { link: 'https://neoconsulting.ai/co', text: 'Colombia' },
        { link: 'https://neoconsulting.ai/cl', text: 'Chile' },
        { link: 'https://neoconsulting.ai/mx', text: 'México' }
      ]
    },
    {
      title: 'Recursos',
      ul: [
        { link: 'https://neoconsulting.ai/blog-neo', text: 'Blog' },
        { link: 'https://neoconsulting.ai/descargables/', text: 'Descargables' },
        { link: 'https://www.youtube.com/@neoconsulting/videos', text: 'Webinars' }
      ]
    }
  ]

  return (
    <div className={style.footer}>
            <motion.div variants={footerVariants} initial="hidden" whileInView="show">
      <div className={style.footer_top}>
        <Accordion data={AccordionData} />

        <div className={style.footer_top_social}>
          <h5>Redes sociales</h5>
          <div className={style.footer_top_social_icons}>
            <a href='https://www.youtube.com/@neoconsulting'>
              <img src={yt.src} alt={'yt'} />
            </a>
            <a href='https://es-la.facebook.com/neoconsulting/'>
              <img src={fb.src} alt={'fb'} />
            </a>
            <a href='https://www.linkedin.com/company/neo-consulting?originalSubdomain=pe'>
              <img src={linkedin.src} alt={'linkedin'} />
            </a>
            <a href='https://www.instagram.com/neo_digital/?hl=es'>
              <img src={insta.src} alt={'insta'} />
            </a>
          </div>
        </div>

        <div className={style.footer_top_awards}>
          <h5>Premios y reconocimientos</h5>
          <div className={style.footer_top_awards_images}>
            <img src={eccom2020.src} alt='eccom2020' />
            <img src={eccom2021.src} alt='eccom2021' />
            <img src={empresa.src} alt='empresa' />
          </div>
        </div>

        <div className={style.footer_top_afiliations}>
          <h5>Afiliaciones</h5>
          <div className={style.footer_top_afiliations_images}>
            <img src={afiliation.src} alt='afiliation' />
          </div>
        </div>

        <div className={style.footer_top_partners}>
          <h5>Somos Partners</h5>
          <div className={style.footer_top_partners_images}>
            <img
              src={googleMarketingPlatform.src}
              alt='googleMarketingPlatform'
            />
            <img src={salesforce.src} alt='salesforce' />
            <img src={hubspot.src} alt='hubspot' />
            <img src={aws.src} alt='aws' />
            <img src={googleCloud.src} alt='googleCloud' />
          </div>
        </div>

        <div className={style.footer_top_border}></div>
      </div>

      <div className={style.footer_bottom}>
        <div className={style.footer_bottom_images}>
          <img src={logoNeo.src} alt='neo' />
          <p>
            © 2022 NEO Consulting - Todos los derechos reservados | Política de
            privacidad | Terminos de uso | Política de Cookies
          </p>
          <img src={complaintsBook.src} alt='complaintsBook' />
        </div>
        <p>
          © 2022 NEO Consulting - Todos los derechos reservados | Política de
          privacidad | Terminos de uso | Política de Cookies
        </p>
      </div>
      </motion.div>
    </div>
  )
}

export default Footer
