import Breadscrumb from '../Breadscrumb/Breadscrumb'
import style from './About.module.scss'
// import Image from 'next/image'
import AboutBannerMobile from '../../public/assets/About/about-banner-mobile.png'
import About1 from '../../public/assets/About/about-1.png'
import About2 from '../../public/assets/About/about-2.png'
import About3 from '../../public/assets/About/about-3.png'
import About4 from '../../public/assets/About/about-4.png'
import About5 from '../../public/assets/About/about-5.png'
import About6 from '../../public/assets/About/about-6.png'
import About7 from '../../public/assets/About/about-7.png'
import About8 from '../../public/assets/About/about-8.png'
import About9 from '../../public/assets/About/about-9.png'
import About10 from '../../public/assets/About/about-10.png'

import Link from 'next/link'

const About = () => {
  return (
    <div className={style.about}>
      <Breadscrumb value={'¿Quiénes somos?'} />

      <div className={style.about_container}>
        <div className={style.about_container_header}>
          <h4>
            Apostamos por la diversidad de talento y aprendizaje de diferentes
            culturas
          </h4>
          <div className={style.about_container_header_btn}>
          {/* <Link href={{
            pathname: '/contact',
            query: { service: 'default', solution: 'default' }
          }}> */}
          <Link href='https://neoconsulting.ai/neo-jobs/'>
            <button className={style.about_container_header_btn_mobile}>
              Únete a nuestro equipo
            </button>
          </Link>
          {/* <Link href={{
            pathname: '/contact',
            query: { service: 'default', solution: 'default' }
          }}> */}
          <Link href='https://neoconsulting.ai/neo-jobs/'>
            <button className={style.about_container_header_btn_ws}>
              Únete a nuestro equipo
            </button>
          </Link>
          </div>
        </div>

        <div className={style.about_container_banners}>
          <div className={style.about_container_banners_mobile}>
            <img
              src={AboutBannerMobile.src}
              alt="About us"
              /* width={288}
              height={289} */
            //   fill={true}
            />
          </div>

          <div className={style.about_container_banners_ws}>
            <span className={style.about_container_banners_ws_part}>
              <img src={About1.src} alt="About 1" width={324} height={283} />
              <img src={About2.src} alt="About 2" width={260} height={388} />
              <img src={About3.src} alt="About 3" width={244} height={249} />
              <img src={About4.src} alt="About 4" width={241} height={366} />
              <img src={About5.src} alt="About 5" width={385} height={257} />
              <img src={About6.src} alt="About 5" width={324} height={322} />
              <img src={About7.src} alt="About 5" width={305} height={388} />
              <img src={About8.src} alt="About 5" width={344} height={241} />
              <img src={About9.src} alt="About 5" width={241} height={366} />
              <img src={About10.src} alt="About 5" width={309} height={257} />
              <img src={About1.src} alt="About 1" width={324} height={283} />
              <img src={About2.src} alt="About 2" width={260} height={388} />
              <img src={About3.src} alt="About 3" width={244} height={249} />
              <img src={About4.src} alt="About 4" width={241} height={366} />
              <img src={About5.src} alt="About 5" width={385} height={257} />
              <img src={About6.src} alt="About 5" width={324} height={322} />
              <img src={About7.src} alt="About 5" width={305} height={388} />
              <img src={About8.src} alt="About 5" width={344} height={241} />
              <img src={About9.src} alt="About 5" width={241} height={366} />
              <img src={About10.src} alt="About 5" width={309} height={257} />
              <img src={About1.src} alt="About 1" width={324} height={283} />
              <img src={About2.src} alt="About 2" width={260} height={388} />
              <img src={About3.src} alt="About 3" width={244} height={249} />
              <img src={About4.src} alt="About 4" width={241} height={366} />
              <img src={About5.src} alt="About 5" width={385} height={257} />
              <img src={About6.src} alt="About 5" width={324} height={322} />
              <img src={About7.src} alt="About 5" width={305} height={388} />
              <img src={About8.src} alt="About 5" width={344} height={241} />
              <img src={About9.src} alt="About 5" width={241} height={366} />
              <img src={About10.src} alt="About 5" width={309} height={257} />
              <img src={About1.src} alt="About 1" width={324} height={283} />
              <img src={About2.src} alt="About 2" width={260} height={388} />
              <img src={About3.src} alt="About 3" width={244} height={249} />
              <img src={About4.src} alt="About 4" width={241} height={366} />
              <img src={About5.src} alt="About 5" width={385} height={257} />
              <img src={About6.src} alt="About 5" width={324} height={322} />
              <img src={About7.src} alt="About 5" width={305} height={388} />
              <img src={About8.src} alt="About 5" width={344} height={241} />
              <img src={About9.src} alt="About 5" width={241} height={366} />
              <img src={About10.src} alt="About 5" width={309} height={257} />
            </span>
            {/* <span className={style.about_container_banners_ws_part}>
            <img src={About1.src} alt="About 1" width={324} height={283} />
              <img src={About2.src} alt="About 2" width={260} height={388} />
              <img src={About3.src} alt="About 3" width={244} height={241} />
              <img src={About4.src} alt="About 4" width={241} height={366} />
              <img src={About5.src} alt="About 5" width={309} height={257} />
              <img src={About6.src} alt="About 5" width={324} height={322} />
              <img src={About7.src} alt="About 5" width={305} height={388} />
              <img src={About8.src} alt="About 5" width={344} height={241} />
              <img src={About9.src} alt="About 5" width={241} height={366} />
              <img src={About10.src} alt="About 5" width={309} height={257} />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
