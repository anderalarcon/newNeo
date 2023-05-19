// import Link from 'next/link'
import style from './Family.module.scss'
import bcorp from '../../public/assets/Family/family.jpg'
import Link from 'next/link'

const Bcorp = () => {
  return (
    <div className={style.bcorp}>
      <div className={style.bcorp_container}>
        <div className={style.bcorp_container_left}>
          <h1 className={style.bcorp_container_left_title}>
            ¿Quieres formar parte de NEO?
          </h1>
          <p className={style.bcorp_container_left_desc}>
            En Neo queremos atraer y desarrollar personas que vean en digital una oportunidad para fortalecer organizaciones y crear un mundo más consciente.
          </p>
          {/* <Link className={style.bcorp_container_left_link} target='_blank' href={'https://www.neoconsulting.ai/hubfs/Descargables%20Neo%20Consulting/Reporte%20de%20sostenibilidad%20NEO%202022.pdf'}>
            Descarga informe de impacto <img src={arrow.src} width={'20'} height={'20'} />
          </Link> */}
          <Link className={style.bcorp_container_left_link} href="https://neo-consulting-s-a-c.breezy.hr/">
            <button className={style.bcorp_container_left_btn}>
              Únete a nuestro equipo
            </button>
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
