import style from './Hero.module.scss'
// import HeroImg from '../../public/assets/Neo_Jobs/Hero/hero-recruitment.png'
// import Link from 'next/link'
import logop1 from '../../../public/assets/CasosDeExito/Global/pre1.svg'
import logop2 from '../../../public/assets/CasosDeExito/Global/pre2.svg'
import logop3 from '../../../public/assets/CasosDeExito/Global/pre3.svg'

import heropacasmayo from '../../../public/assets/CasosDeExito/Pacasmayo/hero_pacasmayo.png'

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
            <span className={style.hero_container_left_titulo_azul}>
              Transformación Digital
            </span> en la <span className={style.hero_container_left_titulo_azul}>
              comercialización
            </span> y <span className={style.hero_container_left_titulo_azul}>
              distribución
            </span> de sectores <span className={style.hero_container_left_titulo_azul}>
              industriales
            </span>
          </h1>
          <a href="https://www.neoconsulting.ai/hubfs/Casos%20de%20%C3%89xito/CDE%20Empresa%20industrial.pdf" className={style.hero_container_left_a}>
            <button className={style.hero_container_left_a_button}>
              Descarga el caso completo
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
