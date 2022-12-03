import style from './Region.module.scss'
import regionMob from '../../public/assets/Region/region_mobile.svg'
import regionDesk from '../../public/assets/Region/region_desktop.svg'

const Region = () => {
  return (
    <div className={style.region}>
      <h1 className={style.region_title} >Tenemos presencia regional</h1>
      <div className={style.blur_1}></div>
      <div className={style.region_container}>
        <img className={style.region_container_mobile} src={regionMob.src} width={320} height={353} />
        <img className={style.region_container_desktop} src={regionDesk.src} width={1250} height={888} />
      </div>
      <div className={style.blur_2}></div>

    </div>
  )
}

export default Region
