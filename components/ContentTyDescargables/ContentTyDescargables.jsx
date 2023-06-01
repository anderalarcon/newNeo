import style from './ContentTyDescargables.module.scss'
// import arrow from '../../public/assets/Crm/Hero/left_arrow.svg'
import PropTypes from 'prop-types'
import IMG1 from '../../public/assets/ContentTyDescargables/img_izq.png'
import Link from 'next/link'
// import uuid from 'react-uuid'

const ContentTyDescargables = ({ data }) => {
//   const {
//     pretitle,
//     title,
//     subtitle,
//     desc,
//     service,
//     solution,
//     mainImg,
//     certifications,
//     descCert
//   } = data
  return (
    <div className={style.componente}>
      <div className={style.componente_container}>
        <div className={style.componente_container_title}>
            <h1>Ya puedes descargar <br /> {data.tituloDescargable} </h1>
            <h3>¡Gracias por tu interés! El documento que solicitaste está listo para ser descargado</h3>
        </div>
        <div className={style.componente_container_content}>
            <div className={style.componente_container_content_izq}>
                <img src={IMG1.src} alt="gaaa" />
                <h3>Haz clic en el botón a continuación para descargar  y aprovechar al máximo su contenido.</h3>
                <Link href={data.linkDescargable}>
                    <button className={style.componente_container_content_izq_boton1}>
                        <div className={style.componente_container_content_izq_boton1_link}>
                            Descargar documento
                        </div>
                    </button>
                </Link>
            </div>
            <div className={style.componente_container_content_der}>
                <img src={data.ImgChapter.src} alt="gaaa" />
                <h3>{data.textoChapter}</h3>
                <Link href="http://localhost:3000/contact/?service=default&solution=default">
                    <button className={style.componente_container_content_der_boton1}>
                        <div className={style.componente_container_content_der_boton1_link}>
                          Contáctanos
                        </div>
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

ContentTyDescargables.propTypes = {
  data: PropTypes.object
}
export default ContentTyDescargables
