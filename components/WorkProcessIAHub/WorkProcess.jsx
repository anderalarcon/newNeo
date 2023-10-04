import style from './WorkProcess.module.scss'
import PropTypes from 'prop-types'
import imglogra from '../../public/assets/Landings_next/iahub/lograrahub.png'
import cuadrito from '../../public/assets/Landings_next/iahub/cuadradito2.png'

const WorkProcess = ({ processes }) => {
  return (
    <div className={style.wp}>
      <img className={style.wp_cuadrito} src={cuadrito.src} alt="" />
      <div className={style.wp_container}>
        <h2 className={style.wp_container_title}>¿Qué lograrás con nuestro servicio?</h2>

        <div className={style.wp_container_title_izqder}>

          <div className={style.wp_container_title_izqder_izq}>
            {processes.map((process, i) => (
            <div key={i} className={style.wp_container_title_izqder_izq_process}>
              <img
                src={process.icon.src}
                alt="icon"
                className={style.wp_container_title_izqder_izq_process_icon}
              />
              <div className={style.wp_container_title_izqder_izq_process_content}>
                <h3>{process.title}</h3>
                <p>{process.text}</p>
                <p>{process.text2}</p>
                <p>{process.text3}</p>
                <p>{process.text4}</p>
                <p>{process.text5}</p>
                <p>{process.text6}</p>
              </div>
            </div>
            ))}
            <a href="#form" className={style.wp_container_title_izqder_izq_button}>
                <button className={style.wp_container_title_izqder_izq_button}>
                  <p className={style.wp_container_title_izqder_izq_button_texto}>
                  Contáctanos
                  </p>
                </button>
              </a>
          </div>

          <div className={style.wp_container_title_izqder_der}>
              <img className={style.wp_container_title_izqder_der_img} src={imglogra.src} />
          </div>

        </div>

      </div>
    </div>
  )
}

WorkProcess.propTypes = {
  processes: PropTypes.array
}

export default WorkProcess
