import style from './Solucion2.module.scss'

import solFernando1 from '../../../public/assets/CasosDeExito/SanFernando/sol_fernando_der.png'
import solFernando2 from '../../../public/assets/CasosDeExito/SanFernando/sol_fernando_izq.png'
import separadormovil from '../../../public/assets/CasosDeExito/SanFernando/separador_movile.png'

import icono1 from '../../../public/assets/CasosDeExito/SanFernando/icono_1.svg'
import icono2 from '../../../public/assets/CasosDeExito/SanFernando/icono_2.svg'
import icono3 from '../../../public/assets/CasosDeExito/SanFernando/icono_3.svg'
import icono4 from '../../../public/assets/CasosDeExito/SanFernando/icono_4.svg'
import icono5 from '../../../public/assets/CasosDeExito/SanFernando/icono_5.svg'
import icono6 from '../../../public/assets/CasosDeExito/SanFernando/icono_6.svg'

import logo1 from '../../../public/assets/CasosDeExito/SanFernando/logo_1.svg'
import logo2 from '../../../public/assets/CasosDeExito/SanFernando/logo_2.svg'
import logo3 from '../../../public/assets/CasosDeExito/SanFernando/logo_3.svg'
import logo4 from '../../../public/assets/CasosDeExito/SanFernando/logo_4.svg'
import logo5 from '../../../public/assets/CasosDeExito/SanFernando/logo_5.svg'
import logo6 from '../../../public/assets/CasosDeExito/SanFernando/logo_6.svg'

const Solucion1 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <h2 className={style.solucion_container_titulo}>
        ¿Cómo lo solucionamos?
        </h2>
        <p className={style.solucion_container_texto}>
        Neo presentó la propuesta de creación de una tienda virtual que permita gestionar el proceso de compra y distribución de vales de forma 100% digital.
        </p>
        <div className={style.solucion_container_imagenes}>
          <div className={style.solucion_container_imagenes_container}>
            <div className={style.solucion_container_imagenes_container_box}>
                <div className={style.solucion_container_imagenes_container_box_izquierda}>
                  <img src={icono1.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container_box_derecha}>
                  <div className={style.solucion_container_imagenes_container_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container_box_derecha_icotitu_ico} src={logo1.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container_box_derecha_icotitu_titu}>
                      Etapa de investigación
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container_box_derecha_descrip}>
                    Co-creación con la metodología Design Sprint con equipos y usuarios para el desarrollo del aplicativo de Vale Digital.
                  </p>
                </div>
            </div>
            <div className={style.solucion_container_imagenes_container_separador}>
              <img className={style.solucion_container_imagenes_container_separador_der} src={solFernando1.src} alt="" />
              <img className={style.solucion_container_imagenes_container_separador_movil} src={separadormovil.src} alt="" />
            </div>
          </div>
          <div className={style.solucion_container_imagenes_container2}>
            <div className={style.solucion_container_imagenes_container2_separador}>
              <img className={style.solucion_container_imagenes_container2_separador_izq} src={solFernando2.src} alt="" />
              <img className={style.solucion_container_imagenes_container2_separador_movil} src={separadormovil.src} alt="" />
            </div>
            <div className={style.solucion_container_imagenes_container2_box}>
                <div className={style.solucion_container_imagenes_container2_box_izquierda}>
                  <img src={icono2.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container2_box_derecha}>
                  <div className={style.solucion_container_imagenes_container2_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container2_box_derecha_icotitu_ico} src={logo2.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container2_box_derecha_icotitu_titu}>
                      Arquitectura de la información
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container2_box_derecha_descrip}>
                  Flujo de navegación, Modelo conceptual y diseño de interacción.
                  </p>
                </div>
            </div>
          </div>
          <div className={style.solucion_container_imagenes_container}>
            <div className={style.solucion_container_imagenes_container_box}>
                <div className={style.solucion_container_imagenes_container_box_izquierda}>
                  <img src={icono3.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container_box_derecha}>
                  <div className={style.solucion_container_imagenes_container_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container_box_derecha_icotitu_ico} src={logo3.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container_box_derecha_icotitu_titu}>
                    Key Visuals
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container_box_derecha_descrip}>
                  Desarrollo del prototipo interactivo de alto nivel listo para ser testeado.
                  </p>
                </div>
            </div>
            <div className={style.solucion_container_imagenes_container_separador}>
              <img className={style.solucion_container_imagenes_container_separador_der} src={solFernando1.src} alt="" />
              <img className={style.solucion_container_imagenes_container_separador_movil} src={separadormovil.src} alt="" />
            </div>
          </div>
          <div className={style.solucion_container_imagenes_container2}>
            <div className={style.solucion_container_imagenes_container2_separador}>
              <img className={style.solucion_container_imagenes_container2_separador_izq} src={solFernando2.src} alt="" />
              <img className={style.solucion_container_imagenes_container2_separador_movil} src={separadormovil.src} alt="" />
            </div>
            <div className={style.solucion_container_imagenes_container2_box}>
                <div className={style.solucion_container_imagenes_container2_box_izquierda}>
                  <img src={icono4.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container2_box_derecha}>
                  <div className={style.solucion_container_imagenes_container2_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container2_box_derecha_icotitu_ico} src={logo4.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container2_box_derecha_icotitu_titu}>
                    Prototipos
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container2_box_derecha_descrip}>
                  Desarrollo de wireframes, Mockups con Sketch y prototipado para desktop, páginas responsive, móviles y apps.
                  </p>
                </div>
            </div>
          </div>
          <div className={style.solucion_container_imagenes_container}>
            <div className={style.solucion_container_imagenes_container_box}>
                <div className={style.solucion_container_imagenes_container_box_izquierda}>
                  <img src={icono5.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container_box_derecha}>
                  <div className={style.solucion_container_imagenes_container_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container_box_derecha_icotitu_ico} src={logo5.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container_box_derecha_icotitu_titu}>
                    Tests de usabilidad
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container_box_derecha_descrip}>
                  Validación del prototipo final mediante seis (06) test de usuarios presenciales.
                  </p>
                </div>
            </div>
            <div className={style.solucion_container_imagenes_container_separador}>
              <img className={style.solucion_container_imagenes_container_separador_der} src={solFernando1.src} alt="" />
              <img className={style.solucion_container_imagenes_container_separador_movil} src={separadormovil.src} alt="" />
            </div>
          </div>
          <div className={style.solucion_container_imagenes_container}>
            <div className={style.solucion_container_imagenes_container_separador}>
            <img className={style.solucion_container_imagenes_container_separador_especial} src="" alt="" />
            </div>
            <div className={style.solucion_container_imagenes_container_box}>
                <div className={style.solucion_container_imagenes_container_box_izquierda}>
                  <img src={icono6.src} alt="" />
                </div>
                <div className={style.solucion_container_imagenes_container_box_derecha}>
                  <div className={style.solucion_container_imagenes_container_box_derecha_icotitu}>
                    <img className={style.solucion_container_imagenes_container_box_derecha_icotitu_ico} src={logo6.src} alt="" />
                    <h4 className={style.solucion_container_imagenes_container_box_derecha_icotitu_titu}>
                    Desarrollo
                    </h4>
                  </div>
                  <p className={style.solucion_container_imagenes_container_box_derecha_descrip}>
                  Desarrollo de una web responsibe y aplicación orientada al usuario y la atención en sistemas Android e IOS.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solucion1
