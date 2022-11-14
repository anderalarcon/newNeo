import style from './SuccessCase.module.scss'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import leftArrow from '../../public/assets/Swiper/left-arrow.svg'
import rightArrow from '../../public/assets/Swiper/right-arrow.svg'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { peruCases } from '../../utilities/home/cases'
import Case from './_children/Case/Case.jsx'
const SuccessCase = () => {
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
          pagination={{ clickable: true }}
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
          {peruCases.map(({ type, title, description, img, url }) => {
            return (
              <SwiperSlide key={title}>
                <Case
                  type={type}
                  title={title}
                  description={description}
                  img={img.src}
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

export default SuccessCase
