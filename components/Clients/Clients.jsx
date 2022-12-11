import style from './Clients.module.scss'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Recommendation from './_children/Recommendation/Recommendation'
import rightArrow from '../../public/assets/Swiper/right-arrow-accent.svg'
import leftArrow from '../../public/assets/Swiper/left-arrow-accent.svg'

const Clients = ({ recommendations }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth < 1200
  )
  const [isMax, setIsMax] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth >= 1538
  )
  const updateDimensions = (event) => {
    if (typeof window !== 'undefined') {
      setIsMobile(event.target.innerWidth < 1200)
      setIsMax(event.target.innerWidth >= 1538)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [updateDimensions])
  return (
    <div className={style.clients}>
      <h1 className={style.clients_title}>Nuestros clientes nos recomiendan</h1>
      <div className={style.clients_container}>
        <div
          className={`${style.clients_container_swiper_button} ${style.swiper_button_next_cases}`}
        >
          <span className={style.clients_container_swiper_button_span}>
            Siguiente
          </span>
          <img src={rightArrow.src} alt='Casos de Exito Neo Consulting' />
        </div>
        <div
          className={`${style.clients_container_swiper_button} ${style.swiper_button_prev_cases}`}
        >
          <img src={leftArrow.src} alt='Casos de Exito Neo Consulting' />
          <span className={style.clients_container_swiper_button_span}>
            Anterior
          </span>
        </div>
        <div className='swiper-pagination-clients'></div>
        <Swiper
          className={style.clients_container_special}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? '1' : '3'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          initialSlide='1'
          spaceBetween={isMax ? 100 : 65}
          navigation={{
            nextEl: `.${style.swiper_button_next_cases}`,
            prevEl: `.${style.swiper_button_prev_cases}`,
            disabledClass: 'swiper-button-disabled'
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-clients',
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>'
            }
          }}
          // loop={true}
        >
          {recommendations.map(
            ({
              logoCompany,
              quote,
              logoClient,
              nameClient,
              chargeClient,
              url
            }) => {
              return (
                <SwiperSlide key={uuid()} className={style.special}>
                  <Recommendation
                    logoCompany={logoCompany}
                    quote={quote}
                    logoClient={logoClient}
                    nameClient={nameClient}
                    chargeClient={chargeClient}
                    url={url}
                  />
                </SwiperSlide>
              )
            }
          )}
        </Swiper>
      </div>
    </div>
  )
}
Clients.propTypes = {
  recommendations: PropTypes.array
}
export default Clients
