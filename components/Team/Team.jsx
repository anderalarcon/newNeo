import style from './Team.module.scss'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import leftArrow from '../../public/assets/Swiper/left-arrow-accent.svg'
import rightArrow from '../../public/assets/Swiper/right-arrow-accent.svg'
import Profile from './_children/Profile/Profile'
import { useEffect, useState } from 'react'
// import { team } from '../../utilities/crm/team'
import uuid from 'react-uuid'

const Team = ({ team }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth < 1200
  )
  const updateDimensions = (event) => {
    if (typeof window !== 'undefined') {
      setIsMobile(event.target.innerWidth < 1200)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [updateDimensions])

  return (
    <div className={style.team}>
      <div className={style.team_container}>
        <h1 className={style.team_container_title}>Conoce a nuestro equipo</h1>
        <p className={style.team_container_subtitle}>
          Nuestros consultores expertos en CRM y Salesforce te ayudarán a
          cumplir los objetivos de tu negocio.
        </p>
        <div
          className={`${style.team_container_swiper_button} ${style.swiper_button_next_cases}`}
        >
          <span className={style.team_container_swiper_button_span}>
            Siguiente
          </span>
          <img src={rightArrow.src} alt='Casos de Exito Neo Consulting' />
        </div>
        <div
          className={`${style.team_container_swiper_button} ${style.swiper_button_prev_cases}`}
        >
          <img src={leftArrow.src} alt='Casos de Exito Neo Consulting' />
          <span className={style.team_container_swiper_button_span}>
            Anterior
          </span>
        </div>
        <div className='swiper-pagination-teams'></div>
        <Swiper className={style.team_container_special}
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
          // spaceBetween={24}
          initialSlide="2"
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
          {team.map(({ fullname, charge, img, bio, linkedin }) => {
            return (
              <SwiperSlide key={uuid()} className='slide-team'>
                <Profile
                  fullName={fullname}
                  charge={charge}
                  img={img}
                  bio={bio}
                  linkedIn={linkedin}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

Team.propTypes = {
  team: PropTypes.array
}

export default Team
