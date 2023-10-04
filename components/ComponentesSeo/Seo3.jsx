import style from './Seo3.module.scss'

const Seo1 = () => {
  return (
    <div className={style.section}>
        <hr className={style.section_hr} />
      <div className={style.section_container}>
        <p className={style.section_container_text1}>
        Consideraciones:
        </p>
        <ul>
        <li className={style.section_container_text2}>
            Solo se analizarán tres secciones específicas de la página web. Por ejemplo, si su e-commerce cuenta con diversas categorías, nos enfocaremos exclusivamente en tres de ellas.
        </li>
        <li className={style.section_container_text2}>
            Tras recibir su solicitud, enviaremos el resultado de la auditoría a su dirección de correo electrónico en un plazo máximo de 5 días hábiles.
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Seo1
