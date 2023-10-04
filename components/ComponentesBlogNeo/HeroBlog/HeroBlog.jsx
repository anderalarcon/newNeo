import style from './HeroBlog.module.scss'

import heroblog from '../../../public/assets/Landings_next/BlogNeo/homeBlog/blog_hero.png'

const HeroBlog = () => {
  return (
    <div className={style.section}>
      <div className={style.section_container}>
        <div className={style.section_container_content}>
          <div className={style.section_container_content_pretitle}>
            <span className={style.section_container_content_pretitle_1}>
              Analytics & AI
            </span> <span className={style.section_container_content_pretitle_2}>
              20 min. de lectura
            </span>
          </div>
          <h3 className={style.section_container_content_title}>
            Retención y lealtad: el camino hacia el crecimiento sostenible
          </h3>
          <p className={style.section_container_content_description}>
            La retención de los clientes es un pilar esencial en el crecimiento sostenible y rentable de los negocios. Un incremento de 5% en la retención puede impulsar el aumento de las ganancias en un 75%. A continuación, algunas otras estadísticas reveladoras.
          </p>
          <a href="" className={style.section_container_content_button}>
            Leer artículo
            </a>
        </div>
        <img className={style.section_container_img}
        src={heroblog.src} alt="haa" />
      </div>
    </div>
  )
}

export default HeroBlog
