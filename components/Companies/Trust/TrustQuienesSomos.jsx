import peru from '../../../public/assets/Trust/QuienesSomos/peru.png'
import argentina from '../../../public/assets/Trust/QuienesSomos/argentina.png'
import mexico from '../../../public/assets/Trust/QuienesSomos/mexico.png'
import colombia from '../../../public/assets/Trust/QuienesSomos/colombia.png'
import chile from '../../../public/assets/Trust/QuienesSomos/chile.png'
import suecia from '../../../public/assets/Trust/QuienesSomos/suecia.png'
import espana from '../../../public/assets/Trust/QuienesSomos/espana.png'
import italia from '../../../public/assets/Trust/QuienesSomos/italia.png'

import style from '../Companies.module.scss'

const Partners = () => {
  return (
    // Seccion de prueba
    <div className={style.companies2}>
        <h2 className={style.companies2_title}>
          Neos en el mundo
        </h2>
        <p className={style.companies2_subtitle}>
          Contamos con un equipo humano especialista en digital trabajando desde diferentes ciudades del mundo.
        </p>
      <div className={style.sliderrr}>
        <div className={style.sliderrr_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={peru.src} alt='peru' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={argentina.src} alt='argentina' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mexico.src} alt='mexico' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={colombia.src} alt='colombia' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={chile.src} alt='chile' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={suecia.src} alt='suecia' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={espana.src} alt='españa' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={italia.src} alt='italia' />
          </div>

          <div className={style.sliderrr_track_imagen}>
            <img src={peru.src} alt='peru' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={argentina.src} alt='argentina' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mexico.src} alt='mexico' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={colombia.src} alt='colombia' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={chile.src} alt='chile' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={suecia.src} alt='suecia' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={espana.src} alt='españa' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={italia.src} alt='italia' />
          </div>

        </div>
      </div>

    </div>

  // Fin de la seccion de prueba

  // Inicio del original
  // <div className={style.companies}>
  //   <h2 className={style.companies_title}>
  //     Algunas empresas que ya confían en nosotros.
  //   </h2>
  //   <div className={style.companies_container}>
  //     <div className={style.companies_container_img}>
  //       <img src={rimac.src} alt='rimac' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={protecta.src} alt='protecta' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={abbott.src} alt='abbott' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={semana.src} alt='semana' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={intersegura.src} alt='intersegura' />
  //     </div>
  //   </div>
  // </div>
  // Fin del original
  )
}

export default Partners
