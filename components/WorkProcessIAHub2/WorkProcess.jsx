import style from './WorkProcess.module.scss'
import PropTypes from 'prop-types'
import cuadrito1 from '../../public/assets/Landings_next/iahub/cuadradito3.png'
import cuadrito2 from '../../public/assets/Landings_next/iahub/cuadradito4.png'
import cuadrito3 from '../../public/assets/Landings_next/iahub/cuadradito5.png'
import cuadrito4 from '../../public/assets/Landings_next/iahub/cuadradito6.png'

const WorkProcess = ({ processes }) => {
  return (
    <div className={style.wp}>
      <img className={style.wp_cuadrito1} src={cuadrito1.src} />
      <img className={style.wp_cuadrito2} src={cuadrito2.src} />
      <img className={style.wp_cuadrito3} src={cuadrito3.src} />
      <img className={style.wp_cuadrito4} src={cuadrito4.src} />
      <div className={style.wp_container}>
        <h2 className={style.wp_container_title}>Nuestro proceso de trabajo</h2>
        <p className={style.wp_container_desc}>
        Conoce cómo diseñamos soluciones efectivas para impulsar el uso de inteligencia artificial en tu empresa
        </p>

        {processes.map((process, i) => (
          <div key={i} className={style.wp_container_process}>
            <img
              src={process.icon.src}
              alt="icon"
              className={style.wp_container_process_icon}
            />
            <div className={style.wp_container_process_content}>
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
      </div>
    </div>
  )
}

WorkProcess.propTypes = {
  processes: PropTypes.array
}

export default WorkProcess
