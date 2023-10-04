import style from './Reto2.module.scss'

const Reto2 = () => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_left}>
          {/* <h2 className={style.reto_container_left_titulo}>
            ¿Cuál fue nuestro reto?
          </h2> */}
          <p className={style.reto_container_left_descripcion}>
            Conoce más sobre nuestro proceso
          </p>
          {/* <p className={style.reto_container_left_descripcion}>
            Por otro lado, desarrollar las competencias digitales dentro del equipo de líderes para llevar a cabo la ejecución de los proyectos priorizados.
          </p> */}
        </div>

        <a href="https://www.neoconsulting.ai/hubfs/Casos%20de%20%C3%89xito/CDE%20Siderperu%20Gerdau%20TD.pdf" className={style.reto_container_right_a}>
            <button className={style.reto_container_right_a_button}>
              Descarga el caso completo
            </button>
        </a>
      </div>
    </div>
  )
}

export default Reto2
