import Link from 'next/link'
import style from './Bcorp.module.scss'
import bcorp from '../../public/assets/Bcorp/bcorp.jpg'
import arrow from '../../public/assets/Bcorp/arrow.svg'
const Bcorp = () => {
  return (
    <div className={style.bcorp}>
      <div className={style.bcorp_container}>
        <div className={style.bcorp_container_left}>
          <h1 className={style.bcorp_container_left_title}>
            Nuestro compromiso como B CORP
          </h1>
          <p className={style.bcorp_container_left_desc}>
            Usamos el poder de los negocios para desarrollar una economía
            inclusiva y sostenible; generando un triple impacto: en el ambiente,
            la sociedad y las personas, junto a un equipo que comparte los
            mismos valores.
          </p>
          <Link className={style.bcorp_container_left_link} href={'/'}>
            Descarga informe de impacto <img src={arrow.src} width={'20'} height={'20'} />
          </Link>
        </div>
        <div className={style.bcorp_container_right}>
          <div className={style.bcorp_container_right_ctn}>
            <img className={style.bcorp_container_right_ctn_img} src={bcorp.src} width={600} height={782} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bcorp
