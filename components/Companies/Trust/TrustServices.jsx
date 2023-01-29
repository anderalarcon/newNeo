import bfalabella from '../../../public/assets/Trust/bfalabella.jpg'
import alicorp from '../../../public/assets/Trust/alicorp.jpg'
import bcp from '../../../public/assets/Trust/bcp.jpg'
import rimac2 from '../../../public/assets/Trust/rimac2.jpg'
import interbank from '../../../public/assets/Trust/interbank.jpg'
import style from '../Companies.module.scss'

const Partners = () => {
  return (
    <div className={style.companies}>
      <h2 className={style.companies_title}>
        Algunas empresas que ya confían en nosotros.
      </h2>

      <div className={style.companies_container}>
        <div className={style.companies_container_img}>
          <img src={interbank.src} alt='interbank' />
        </div>
        <div className={style.companies_container_img}>
          <img src={bcp.src} alt='bcp' />
        </div>
        <div className={style.companies_container_img}>
          <img src={bfalabella.src} alt='bfalabella' />
        </div>
        <div className={style.companies_container_img}>
          <img src={rimac2.src} alt='rimac2' />
        </div>
        <div className={style.companies_container_img}>
          <img src={alicorp.src} alt='alicorp' />
        </div>
      </div>
    </div>
  )
}

export default Partners
