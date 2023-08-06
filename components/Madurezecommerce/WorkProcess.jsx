import style from './WorkProcess.module.scss'
import PropTypes from 'prop-types'

const WorkProcess = ({ processes }) => {
  return (
    <div className={style.wp}>
      <div className={style.wp_container}>
        <h2 className={style.wp_container_title}>¿Por qué realizar el autodiagnóstico?</h2>

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
