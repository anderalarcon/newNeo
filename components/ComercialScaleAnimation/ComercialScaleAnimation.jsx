import style from './ComercialScaleAnimation.module.scss'
import PropTypes from 'prop-types'
import IMG1 from '../../public/assets/Comercial/animacion1.png'
import IMG2 from '../../public/assets/Comercial/animacion2.png'
import IMG3 from '../../public/assets/Comercial/animacion3.png'

import ESC1 from '../../public/assets/Comercial/escala_1.svg'
import ESC2 from '../../public/assets/Comercial/escala_2.svg'
import ESC3 from '../../public/assets/Comercial/escala_3.svg'
// import Link from 'next/link'

const ContentTyDescargables = () => {
  return (
    <div className={style.componente}>
      <div className={style.componente_container}>
        <div className={style.componente_container_title}>
            <h1>¿Qué es el reporting SEO automatizado?</h1>
        </div>
        <div className={style.componente_container_content}>
            <div className={style.componente_container_content_izq}>
                <img className={style.componente_container_content_izq_img1} src={IMG1.src} alt="" />
                <img className={style.componente_container_content_izq_img2} src={IMG2.src} alt="" />
                <img className={style.componente_container_content_izq_img3} src={IMG3.src} alt="" />
            </div>
            <div className={style.componente_container_content_der}>
              <div className={style.componente_container_content_der_escala}>
                <img className={style.componente_container_content_der_escala_icon1} src={ESC1.src} alt='' />
                <p className={style.componente_container_content_der_escala_text1}>Dashboard automatizado que muestra el desempeño de tu estrategia SEO en tiempo real.</p>
              </div>
              <div className={style.componente_container_content_der_escala}>
                <img className={style.componente_container_content_der_escala_icon2} src={ESC2.src} alt='' />
                <p className={style.componente_container_content_der_escala_text2}>Accede a reportes personalizados a tu rubro de negocio y, de esa manera, medir lo que importa.</p>
              </div>
              <div className={style.componente_container_content_der_escala}>
                <img className={style.componente_container_content_der_escala_icon3} src={ESC3.src} alt='' />
                <p className={style.componente_container_content_der_escala_text3}>Optimiza el posicionamiento de tu marca en base a tus resultados, los de tu competencia y las últimas tendencias.</p>
              </div>
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
