import Link from 'next/link'
import style from './Vision.module.scss'
import Triangle1 from '../../public/assets/Crm/Vision/Triangle1'
import Triangle2 from '../../public/assets/Crm/Vision/Triangle2'
import Triangle3 from '../../public/assets/Crm/Vision/Triangle3'
import Triangle4 from '../../public/assets/Crm/Vision/Triangle4'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './_children/Card'
import uuid from 'react-uuid'

const Vision = ({ defaultVersion = true, visions = [], desc }) => {
  if (defaultVersion) {
    const getVisions = () => {
      if (visions.length > 0) {
        return (
          <div className={style.vision_ctn} id='parent'>
            {visions.map(({ icon, title, desc }) => {
              return <Card key={uuid()} icon={icon} title={title} desc={desc} />
            })}
          </div>
        )
      }
      return null
    }

    return (
      <div className={style.vision}>
        <h2 className={style.vision_container_title}>
          Visión para lograr objetivos de negocio
        </h2>
        <p className={style.vision_container_subtitle}>
          {desc}
        </p>
        {getVisions()}
      </div>
    )
  }

  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)

  const fillOne = () => {
    setFirst(!first)
    setSecond(false)
    setThird(false)
    setFourth(false)
  }
  const fillSecond = () => {
    setFirst(false)
    setSecond(!second)
    setThird(false)
    setFourth(false)
  }
  const fillThird = () => {
    setFirst(false)
    setSecond(false)
    setThird(!third)
    setFourth(false)
  }
  const fillFourth = () => {
    setFirst(false)
    setSecond(false)
    setThird(false)
    setFourth(!fourth)
  }

  const getServices = () => {
    if (first) {
      return (
        <>
          <h1 className={style.vision_container_right_title}>
            CRM Estratégico
          </h1>
          <p className={style.vision_container_right_description}>
            Procesos, personas y tecnología con foco en la generación de valor
            para el cliente y la empresa.
          </p>
        </>
      )
    }
    if (second) {
      return (
        <>
          <h1 className={style.vision_container_right_title}>CRM Analítico</h1>
          <p className={style.vision_container_right_description}>
            Recopilación, integración y análisis de datos sobre las
            interacciones con los clientes, para la ejecución de acciones
            data-driven.
          </p>
        </>
      )
    }
    if (third) {
      return (
        <>
          <h1 className={style.vision_container_right_title}>CRM Operativo</h1>
          <p className={style.vision_container_right_description}>
            Operación del CRM, con gestión integrada de canales y automatización
            de la comunicación en cada etapa del ciclo de vida del cliente.
          </p>
        </>
      )
    }
    if (fourth) {
      return (
        <>
          <h1 className={style.vision_container_right_title}>Implementación</h1>
          <p className={style.vision_container_right_description}>
            Setup inicial o migración de soluciones de CRM y MA. integraciones
            con plataformas actuales.
          </p>
        </>
      )
    }
    if (!first && !second && !third && !fourth) {
      setFirst(true)
      return (
        <>
          <h1 className={style.vision_container_right_title}>
            CRM Estratégico
          </h1>
          <p className={style.vision_container_right_description}>
            Procesos, personas y tecnología con foco en la generación de valor
            para el cliente y la empresa.
          </p>
        </>
      )
    }
  }

  const getTriangle = () => (
    <>
      <div
        onClick={fillOne}
        className={`${style.vision_container_left_ctn_1} ${
          first ? style.fill : ''
        }`}
      >
        <Triangle1 />
      </div>
      <div
        onClick={fillSecond}
        className={`${style.vision_container_left_ctn_2} ${
          second ? style.fill : ''
        }`}
      >
        <Triangle2 />
      </div>
      <div
        onClick={fillThird}
        className={`${style.vision_container_left_ctn_3} ${
          third ? style.fill : ''
        }`}
      >
        <Triangle3 />
      </div>
      <div
        onClick={fillFourth}
        className={`${style.vision_container_left_ctn_4} ${
          fourth ? style.fill : ''
        }`}
      >
        <Triangle4 />
      </div>
    </>
  )

  return (
    <div className={style.vision}>
      <h2 className={style.vision_container_title}>
        Visión para lograr objetivos de negocio
      </h2>
      <p className={style.vision_container_subtitle}>
        Nuestro diferencial viene de la consultoría y entendimiento del negocio.
      </p>
      <div className={style.vision_container}>
        <div className={style.vision_container_left}>
          <div className={style.vision_container_left_ctn}>{getTriangle()}</div>
        </div>
        <div className={style.vision_container_right}>
          {getServices()}
          <div className={style.vision_container_right_link}>
            <Link
              className={style.vision_container_right_link_lnk}
              href={'/contact?service=crm&solution=default'}
            >
              Conversemos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
Vision.propTypes = {
  defaultVersion: PropTypes.bool,
  visions: PropTypes.array,
  desc: PropTypes.string
}
export default Vision
