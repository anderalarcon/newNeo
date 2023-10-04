import style from './Hero.module.scss'
// import HeroImg from '../../public/assets/Neo_Jobs/Hero/hero-recruitment.png'
// import Link from 'next/link'
import logop1 from '../../../public/assets/CasosDeExito/Global/pre1.svg'
import logop2 from '../../../public/assets/CasosDeExito/Global/pre2.svg'
import logop3 from '../../../public/assets/CasosDeExito/Global/pre3.svg'

import heropacasmayo from '../../../public/assets/CasosDeExito/SanFernando/hero_sanfernando.png'

const HeroRecruitment = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_left}>
          <div className={style.hero_container_left_logos}>
            <img src={logop1.src} alt="logoNeoP1" />
            <img src={logop2.src} alt="logoNeoP2" />
            <img src={logop3.src} alt="logoNeoP3" />
          </div>
          <h1 className={style.hero_container_left_titulo}>
          Diseño y optimización de tienda virtual para vales digitales
          </h1>
          <a href="https://www.neoconsulting.ai/hubfs/Casos%20de%20%C3%89xito/CDE%20San%20fernado%20UX&UI.pdf" className={style.hero_container_left_a} target='_blank' rel="noreferrer">
            <button className={style.hero_container_left_a_button}>
            Descargar el caso de éxito
            </button>
          </a>
        </div>

        <div className={style.hero_container_right}>
          <img className={style.hero_container_right_img}
            src={heropacasmayo.src} alt="hero pacasmayo" />
        </div>
      </div>
    </div>
  )
}

export default HeroRecruitment
