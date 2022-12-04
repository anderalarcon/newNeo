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
// import { team } from '../../utilities/crm/team'
const Team = ({ team }) => {
  return (
    <div className={style.team}>
      <div className={style.team_container}>
        <h1 className={style.team_container_title}>Conoce a nuestro equipo</h1>
        <p className={style.team_container_subtitle}>
          Nuestros consultores expertos en CRM y Salesforce te ayudarán a
          cumplir los objetivos de tu negocio.
        </p>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={ 'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          spaceBetween={24}
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
          {team.map(({ fullname, charge, img, bio, linkedin }) => {
            return (
              <SwiperSlide>
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
