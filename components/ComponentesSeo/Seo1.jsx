import style from './Seo1.module.scss'

import img1 from '../../public/assets/Landings_next/seo/seo_img1.png'
import img2 from '../../public/assets/Landings_next/seo/seo_img2.png'
import img3 from '../../public/assets/Landings_next/seo/seo_img3.png'

import numero1 from '../../public/assets/Landings_next/seo/seo_n1.svg'
import numero2 from '../../public/assets/Landings_next/seo/seo_n2.svg'
import numero3 from '../../public/assets/Landings_next/seo/seo_n3.svg'

import seoico1 from '../../public/assets/Landings_next/seo/seo_ico1.svg'
import seoico2 from '../../public/assets/Landings_next/seo/seo_ico2.svg'
import seoico3 from '../../public/assets/Landings_next/seo/seo_ico3.svg'

const Seo1 = () => {
  return (
    <div className={style.section}>
      <div className={style.section_container}>
        <h2 className={style.section_container_title}>
          Proceso de auditoría
        </h2>
        <p className={style.section_container_subtitle}>
          Si buscas una ventaja competitiva y un crecimiento sostenible en línea, nuestra auditoría SEO es para ti.
        </p>
        <div className={style.section_container_boxg}>
            <img className={style.section_container_boxg_img}
              src={img1.src} alt="" />
            <div className={style.section_container_boxg_minibox}>
              <img className={style.section_container_boxg_minibox_numero}
                src={numero1.src} alt="" />
              <div className={style.section_container_boxg_minibox_contenido}>
                  <div className={style.section_container_boxg_minibox_contenido_arriba}>
                    <img className={style.section_container_boxg_minibox_contenido_arriba_icono}
                      src={seoico1.src} alt="" />
                    <h4 className={style.section_container_boxg_minibox_contenido_arriba_titulo}>
                      KW research
                    </h4>
                  </div>
                  <p className={style.section_container_boxg_minibox_contenido_descripcion}>
                    Identificación de las palabras clave que los usuarios usan en el proceso de consideración y compra, así como los volúmenes de búsqueda y la posición en la que tu empresa se encuentra.
                  </p>
              </div>
            </div>
        </div>

        <div className={style.section_container_boxg}>
        <div className={style.section_container_boxg_minibox}>
              <img className={style.section_container_boxg_minibox_numero2}
                src={numero2.src} alt="" />
              <div className={style.section_container_boxg_minibox_contenido}>
                  <div className={style.section_container_boxg_minibox_contenido_arriba}>
                    <img className={style.section_container_boxg_minibox_contenido_arriba_icono}
                      src={seoico2.src} alt="" />
                    <h4 className={style.section_container_boxg_minibox_contenido_arriba_titulo}>
                      Benchmark
                    </h4>
                  </div>
                  <p className={style.section_container_boxg_minibox_contenido_descripcion}>
                   Evaluación del desempeño de tus competidores versus el de tu web. Con los resultados, identificamos oportunidades y puntos de mejora que te permitan ajustar tu estrategia.
                  </p>
              </div>
            </div>
            <img className={style.section_container_boxg_img}
              src={img2.src} alt="" />
        </div>

        <div className={style.section_container_boxg}>
            <img className={style.section_container_boxg_img}
              src={img3.src} alt="" />
            <div className={style.section_container_boxg_minibox}>
              <img className={style.section_container_boxg_minibox_numero2}
                src={numero3.src} alt="" />
              <div className={style.section_container_boxg_minibox_contenido}>
                  <div className={style.section_container_boxg_minibox_contenido_arriba}>
                    <img className={style.section_container_boxg_minibox_contenido_arriba_icono}
                      src={seoico3.src} alt="" />
                    <h4 className={style.section_container_boxg_minibox_contenido_arriba_titulo}>
                      Auditoría SEO
                    </h4>
                  </div>
                  <p className={style.section_container_boxg_minibox_contenido_descripcion}>
                   Complementamos la auditoría previa con variables de contenido, técnico y de autoridad adicionales con el uso de herramientas SEO y crawlers. Toda esta data luego es procesada en nuestro sistema, ofreciendo un reporte automatizado con métricas priorizadas en impacto orgánico.
                  </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Seo1
