import style from './Reto1.module.scss'

import retosider from '../../../public/assets/CasosDeExito/Siderperu/reto_siderperu.png'

const Reto1 = () => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_left}>
          <h2 className={style.reto_container_left_titulo}>
            ¿Cuál fue nuestro reto?
          </h2>
          <p className={style.reto_container_left_descripcion}>
            Armar un plan integral de transformación digital, alineado con la visión y propósito de Siderperú. Este debía incluir la dirección estratégica (objetivos, indicadores y proyectos priorizados), y el modelo de gobierno.
          </p>
          <p className={style.reto_container_left_descripcion}>
            Por otro lado, desarrollar las competencias digitales dentro del equipo de líderes para llevar a cabo la ejecución de los proyectos priorizados.
          </p>
        </div>

        <div className={style.reto_container_right}>
          <img className={style.reto_container_right_img}
            src={retosider.src} alt="reto siderperu" />
        </div>
      </div>
    </div>
  )
}

export default Reto1
