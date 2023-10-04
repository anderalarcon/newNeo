import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './HeroIAHub.module.scss'
import icono1 from '../../public/assets/Landings_next/iahub/hub1.svg'
import icono2 from '../../public/assets/Landings_next/iahub/hub2.svg'
import icono3 from '../../public/assets/Landings_next/iahub/hub3.svg'

const HeroIAHub = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <h1 className={style.hero_container_title}>
          IA HUB: Ruta hacia la automatización con IA
        </h1>

        <div className={style.hero_container_swiperWrapper}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide className={style.hero_container_swiperWrapper_opac}>
              <div className={style.hero_container_swiperWrapper_opac_box}>
                <div className={style.hero_container_swiperWrapper_opac_box_titulonimagen}>
                  <img src={icono1.src} alt="" />
                  <p>Fortalece tu equipo</p>
                </div>
                <p className={style.hero_container_swiperWrapper_opac_box_texto}>
                Es una estrategia enfocada en fortalecer las capacidades digitales de tu equipo.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.hero_container_swiperWrapper_opac}>
              <div className={style.hero_container_swiperWrapper_opac_box}>
                <div className={style.hero_container_swiperWrapper_opac_box_titulonimagen}>
                  <img src={icono2.src} alt="" />
                  <p>Optimiza tus estrategias</p>
                </div>
                <p className={style.hero_container_swiperWrapper_opac_box_texto}>
                Optimiza operaciones, reduce costos y eleva la satisfacción del cliente.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.hero_container_swiperWrapper_opac}>
              <div className={style.hero_container_swiperWrapper_opac_box}>
                <div className={style.hero_container_swiperWrapper_opac_box_titulonimagen}>
                  <img src={icono3.src} alt="" />
                  <p>Uso correcto de la IA</p>
                </div>
                <p className={style.hero_container_swiperWrapper_opac_box_texto}>
                Implementa Inteligencia Artificial en tu organización de manera segura, sin comprometer tu propiedad intelectual.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <a href="#form">
          <button className={style.hero_container_button}>
            <p className={style.hero_container_button_texto}>
            Integra la IA a tu empresa
            </p>
          </button>
        </a>
      </div>
    </div>
  )
}

export default HeroIAHub
