import style from './PreFooter.module.scss'
// import HeroImg from '../../public/assets/Neo_Jobs/Hero/hero-recruitment.png'
// import Link from 'next/link'

import prefooterpacasmayo from '../../../public/assets/CasosDeExito/Pacasmayo/prefooter.png'

const PreFooter = () => {
  return (
    <div className={style.prefooter}>
      <div className={style.prefooter_container}>
        <div className={style.prefooter_container_left}>
          <h3 className={style.prefooter_container_left_titulo}>
            Estamos listos para conversar contigo
          </h3>
          <p className={style.prefooter_container_left_texto}>
            Nuestros consultores te ayudarán a llevar tu organización al siguiente nivel.
          </p>
          <a href="https://neoconsulting.ai/contact/?service=default&solution=default" className={style.prefooter_container_left_a}>
            <button className={style.prefooter_container_left_a_button}>
              Contáctanos
            </button>
          </a>
        </div>

        <div className={style.prefooter_container_right}>
          <img className={style.prefooter_container_right_img}
            src={prefooterpacasmayo.src} alt="pre footer siderperu" />
        </div>
      </div>
    </div>
  )
}

export default PreFooter
