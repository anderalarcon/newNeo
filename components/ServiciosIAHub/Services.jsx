import style from './Services.module.scss'
import procedure from '../../public/assets/Landings_next/iahub/iahubserv_1.svg'
import impact from '../../public/assets/Landings_next/iahub/iahubserv_2.svg'
import cuadradito from '../../public/assets/Landings_next/iahub/cuadradito1v2.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Services = ({ services }) => {
  const [service, setService] = useState('service1')

  return (
    <div className={style.services}>
      <h2 className={style.services_heading}>Servicios disponibles</h2>

      <div className={style.services_tabs}>
        <button
          className={
            service === 'service1'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service1')}
        >
          Workshop
        </button>
        <button
          className={
            service === 'service2'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service2')}
        >
          Hackathon
        </button>
        <button
          className={
            service === 'service3'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service3')}
        >
          Knowledge Center
        </button>
        <button
          className={
            service === 'service4'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service4')}
        >
          Interfaces Conversacionales
        </button>
      </div>

      <div className={style.services_container}>
        {services[service].map((service, index) => (
          <div className={style.services_container_service} key={index}>
            {/* <h3 className={style.services_container_service_title}>
              {service.title}
            </h3>
            <p className={style.services_container_service_desc}>
              {service.desc}
            </p> */}

            <div
              className={`${style.services_container_service_part} ${
                service.reverse && style.reverse
              }`}
            >
              <img
                src={service.coverImg}
                alt={service.name}
                className={style.services_container_service_part_image}
              />

              <div className={style.services_container_service_part_meta}>
                <h4 className={style.services_container_service_part_meta_name}>
                  {service.name}
                </h4>
                <p
                  className={style.services_container_service_part_meta_content}
                >
                  {service.content}
                </p>

                <p
                  className={style.services_container_service_part_meta_content2}
                >
                  {service.content2}
                </p>

                <div
                  className={
                    style.services_container_service_part_meta_container
                  }
                >
                  {service.procedure && (
                    <div
                      className={
                        style.services_container_service_part_meta_container_process
                      }
                    >
                      <img src={procedure.src} alt="Procedure" />

                      <div
                        className={
                          style.services_container_service_part_meta_container_process_content
                        }
                      >
                        {/* <h5>Procedimiento</h5> */}
                        <p>{service.procedure}</p>
                      </div>
                    </div>
                  )}

                  <div
                    className={
                      style.services_container_service_part_meta_container_process
                    }
                  >
                    <img src={impact.src} alt="Procedure" />

                    <div
                      className={
                        style.services_container_service_part_meta_container_process_content
                      }
                    >
                      {/* <h5>Impacto</h5> */}
                      <p>{service.impact}</p>
                      <p>{service.impact2}</p>
                      <p>{service.impact3}</p>
                      <p>{service.impact4}</p>
                    </div>
                  </div>
                </div>

                <a href="#form">
                  <button
                    className={style.services_container_service_part_meta_contact}
                  >
                    <p className={style.services_container_service_part_meta_contact_texto}>
                    Conoce más
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img className={style.services_cuadradito} src={cuadradito.src} alt="" />
    </div>
  )
}

export default Services
Services.propTypes = {
  services: PropTypes.array
}
