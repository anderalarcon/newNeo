import style from './Content404.module.scss'
// import Image from 'next/image'
// import About1 from '../../public/assets/About/about-1.png'
import Link from 'next/link'
import img404 from '../../public/assets/404/img404.png'
import icon1 from '../../public/assets/404/icon1.svg'
import icon2 from '../../public/assets/404/icon2.svg'
import icon3 from '../../public/assets/404/icon3.svg'

const Content404 = () => {
  return (
    <div className={style.content}>
      <div className={style.content_container}>
        <div className={style.content_container_img}>
          <img className={style.content_container_img_size} src={img404.src} />
        </div>
        <h2 className={style.content_container_text1}>
          ¡Ups! Página no encontrada
        </h2>
        <h4 className={style.content_container_text2}>
          La página que estás buscando parece haberse extraviado en el vasto espacio cibernético. Estamos trabajando para recuperarla, pero mientras tanto, te invitamos a explorar otras secciones de nuestro sitio.
        </h4>
        <div className={style.content_container_botones}>
          <Link href="https://neoconsulting.ai/pe/">
            <button className={style.content_container_botones_boton1}>
              <div className={style.content_container_botones_boton1_link} href="google.com">
                <img src={icon1.src} width={25} alt="" />
                Página principal
              </div>
            </button>
          </Link>
          <Link href="https://neoconsulting.ai/recursos-digitales/">
            <button className={style.content_container_botones_boton2}>
              <div className={style.content_container_botones_boton1_link} href="google.com">
                <img src={icon2.src} width={25} alt="" />
                Descargables
              </div>
            </button>
          </Link>
          <Link href="https://neoconsulting.ai/casos-de-exito-neo-consulting-ai/">
            <button className={style.content_container_botones_boton2}>
              <div className={style.content_container_botones_boton1_link} href="google.com">
                <img src={icon3.src} width={25} alt="" />
                Casos de éxito
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Content404
