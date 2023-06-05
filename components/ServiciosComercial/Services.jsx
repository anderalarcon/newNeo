import style from './Services.module.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Services = ({ services }) => {
  const [service, setService] = useState('service1')

  return (
    <div className={style.services}>
      <h2 className={style.services_heading}>¿Cómo impacta en tu estrategia SEO?</h2>

      <div className={style.services_tabs}>
        <button
          className={
            service === 'service1'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service1')}
        >
          Data
        </button>
        <button
          className={
            service === 'service2'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service2')}
        >
          Procesos
        </button>
        <button
          className={
            service === 'service3'
              ? style.services_tabs_tab_active
              : style.services_tabs_tab
          }
          onClick={() => setService('service3')}
        >
          Resultados
        </button>
      </div>

      <div className={style.services_container}>
        {services[service].map((service, index) => (
          <div className={style.services_container_service} key={index}>
            {/* <h3 className={style.services_container_service_title}>
              {service.title}
            </h3> */}
            {/* <p className={style.services_container_service_desc}>
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
                {/* <h4 className={style.services_container_service_part_meta_name}>
                  {service.name}
                </h4> */}
                {/* <p
                  className={style.services_container_service_part_meta_content}
                >
                  {service.content}
                </p> */}

                <div
                  className={
                    style.services_container_service_part_meta_container
                  }
                >

                    <div
                      className={
                        style.services_container_service_part_meta_container_process
                      }
                    >
                      <img src={service.icon1} />

                      <div
                        className={
                          style.services_container_service_part_meta_container_process_content
                        }
                      >
                        <h5>{service.title1}</h5>
                        <p>{service.conten1}</p>
                      </div>
                    </div>

                    <div
                      className={
                        style.services_container_service_part_meta_container_process
                      }
                    >
                      <img src={service.icon2} />

                      <div
                        className={
                          style.services_container_service_part_meta_container_process_content
                        }
                      >
                        <h5>{service.title2}</h5>
                        <p>{service.conten2}</p>
                      </div>
                    </div>

                    <div
                      className={
                        style.services_container_service_part_meta_container_process
                      }
                    >
                      <img src={service.icon3} />

                      <div
                        className={
                          style.services_container_service_part_meta_container_process_content
                        }
                      >
                        <h5>{service.title3}</h5>
                        <p>{service.conten3}</p>
                        <p>{service.espacio}</p>
                        <p>{service.espacio}</p>
                      </div>
                    </div>

                </div>

                <a href={service.contactUrl}>
                  <button
                    className={
                      style.services_container_service_part_meta_contact
                    }
                  >
                    Contáctanos
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
Services.propTypes = {
  services: PropTypes.array
}
