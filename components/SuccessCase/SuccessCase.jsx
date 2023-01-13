import style from './SuccessCase.module.scss'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import leftArrow from '../../public/assets/Swiper/left-arrow.svg'
import rightArrow from '../../public/assets/Swiper/right-arrow.svg'
import PropTypes from 'prop-types'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Case from './_children/Case/Case.jsx'
const SuccessCase = ({ cases }) => {
  return (
    <div className={style.success}>
      <div className={style.success_container}>
        <Swiper
          // install Swiper modules
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
            el: '.swiper-pagination-cde',
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>'
            }
          }}
          scrollbar={{ draggable: true }}
        >
          <div
            className={`${style.success_container_swiper_button} ${style.swiper_button_next_cases}`}
          >
            <span className={style.success_container_swiper_button_span}>
              Siguiente
            </span>
            <img src={rightArrow.src} alt='Casos de Exito Neo Consulting' />
          </div>
          <div
            className={`${style.success_container_swiper_button} ${style.swiper_button_prev_cases}`}
          >
            <img src={leftArrow.src} alt='Casos de Exito Neo Consulting' />
            <span className={style.success_container_swiper_button_span}>
              Anterior
            </span>
          </div>
          <div className="swiper-pagination-cde"></div>
          {cases.map(({ type, title, description, img, imgMob, url }, i) => {
            return (
              <SwiperSlide key={title + i}>
                <Case
                  type={type}
                  title={title}
                  description={description}
                  img={img.src}
                  imgMob={imgMob.src}
                  url={url}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

SuccessCase.propTypes = {
  cases: PropTypes.array
}

export default SuccessCase
