import Link from 'next/link'
import style from './Hero.module.scss'
import view1Desk from '../../public/assets/Hero/view-1-desktoppp.png'
import view2Desk from '../../public/assets/Hero/banner_desempeno.png'
import arrowRight from '../../public/assets/Hero/arrow-right-white.svg'
import { Navigation, Pagination, A11y } from 'swiper'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import leftArrow from '../../public/assets/Swiper/left-arrow.svg'
import rightArrow from '../../public/assets/Swiper/right-arrow.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { staggerContainer, slideIn } from '../../utilities/global/motion'
import TagManager from 'react-gtm-module'

const Hero = ({ urlHasUtm, router }) => {
  const utmParams = {}
  if (urlHasUtm) {
    for (const key in router.query) {
      utmParams[key] = router.query[key]
    }
  }
  return (
    <motion.section
      className={style.hero}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={style.hero_container}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: `.${style.swiper_button_next_cases}`,
            prevEl: `.${style.swiper_button_prev_cases}`,
            disabledClass: 'swiper-button-disabled'
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-home',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>'
            }
          }}
          scrollbar={{ draggable: true }}
        >
          <div className='swiper-pagination-home'></div>

          <SwiperSlide>
            <motion.div
              className={style.hero_container_view}
              variants={slideIn('right', 'tween', 0, 1)}
            >
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_next_cases}`}
              >
                <span className={style.hero_container_swiper_button_span}>
                  Siguiente
                </span>
                <img src={rightArrow.src} alt='Casos de Éxito Neo Consulting' />
              </div>
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_prev_cases}`}
              >
                <img src={leftArrow.src} alt='Casos de Éxito Neo Consulting' />
                <span className={style.hero_container_swiper_button_span}>
                  Anterior
                </span>
              </div>
              <h1 className={style.hero_container_view_title}>
                Aumentamos tus ventas digitales utilizando data e inteligencia artificial.
              </h1>
              <div className={style.hero_container_view_buttons}>
                <Link
                  className={style.hero_container_view_buttons_contact}
                  onClick={() => {
                    TagManager.dataLayer({
                      dataLayer: {
                        event: 'click_button_formulario',
                        event_category: 'boton_interes_contacto',
                        event_label: 'hero_home_boton_contacto',
                        value: 1
                      }
                    })
                  }}
                  href={{
                    pathname: '/contact',
                    query: {
                      service: 'default',
                      solution: 'default',
                      ...(urlHasUtm && {
                        ...utmParams
                      })
                    }
                  }}
                >
                  Contáctanos
                </Link>
                <a
                  className={style.hero_container_view_buttons_solutions}
                  href='#solutions'
                >
                  Ver Soluciones
                  <span
                    className={
                      style.hero_container_view_buttons_solutions_arrow
                    }
                  >
                    <img src={arrowRight.src} alt='' />
                  </span>
                </a>
              </div>
              <div className={style.hero_container_view_details}>
                <div
                  className={style.hero_container_view_details_subcontainer_1}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      22
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      años de experiencia
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_2}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +100
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      empresas en más de 15 sectores distintos
                    </p>
                  </div>
                </div>
                <div
                  className={style.hero_container_view_details_subcontainer_3}
                >
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_title
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_title_ttl
                      }
                    >
                      +800
                    </p>
                  </div>
                  <div
                    className={
                      style.hero_container_view_details_subcontainer_description
                    }
                  >
                    <p
                      className={
                        style.hero_container_view_details_subcontainer_description_dsc
                      }
                    >
                      proyectos exitosos en los últimos 5 años
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={style.hero_container_view_img}
                src={view1Desk.src}
                alt=''
              />
              <img
                className={style.hero_container_view_img_desktop}
                src={view1Desk.src}
                alt=''
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              className={style.hero_container_view}
              variants={slideIn('right', 'tween', 0, 1)}
            >
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_next_cases}`}
              >
                <span className={style.hero_container_swiper_button_span}>
                  Siguiente
                </span>
                <img src={rightArrow.src} alt='Casos de Éxito Neo Consulting' />
              </div>
              <div
                className={`${style.hero_container_swiper_button} ${style.swiper_button_prev_cases}`}
              >
                <img src={leftArrow.src} alt='Casos de Éxito Neo Consulting' />
                <span className={style.hero_container_swiper_button_span}>
                  Anterior
                </span>
              </div>
              <div className={style.hero_container_view_second}>
                <div className={style.hero_container_view_second_left}>
                  <h1
                    className={`${style.hero_container_view_title} ${style.hero_container_view_second_title}`}
                  >
                    Reporte Desempeño digital de los Marketplaces en Perú
                  </h1>
                  <p className={style.hero_container_view_second_left_desc}>
                    Este reporte proporciona un análisis del desempeño digital de los principales marketplaces y comercios electrónicos en Perú. Así como también brinda insights de los factores que impulsan su crecimiento, los desafíos que enfrentan y las oportunidades existentes para potenciar su expansión.
                  </p>
                  <Link
                    className={style.hero_container_view_buttons_contact}
                    href={
                      'https://neoconsulting.ai/reporte-desempeno-digital-marketplaces-peru-2023'
                    }
                  >
                    Descargar gratis
                  </Link>
                </div>
                <div className={style.hero_container_view_second_right}>
                  <div className={style.hero_container_view_second_right_img}>
                    <img src={view2Desk.src} alt='' />
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  )
}
Hero.propTypes = {
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}
export default Hero
