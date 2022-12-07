import style from './Clients.module.scss'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Recommendation from './_children/Recommendation/Recommendation'

const Clients = ({ recommendations }) => {
  return (
    <div className={style.clients}>
      <h1 className={style.clients_title}>Nuestros clientes nos recomiendan</h1>
      <div className={style.clients_container}>
        <Swiper
          className={style.team_container_special}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          // spaceBetween={24}
          initialSlide='2'
          spaceBetween={48}
          navigation={{
            nextEl: `.${style.swiper_button_next_cases}`,
            prevEl: `.${style.swiper_button_prev_cases}`,
            disabledClass: 'swiper-button-disabled'
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-teams',
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
                <SwiperSlide key={uuid()}>
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
