import rci from '../../../public/assets/Trust/Home/rci.jpg'
import incarail from '../../../public/assets/Trust/Home/incarail.jpg'
import sanfernando from '../../../public/assets/Trust/Home/sanfernando.jpg'
import astrid from '../../../public/assets/Trust/Home/astrid.jpg'
import cajapiura from '../../../public/assets/Trust/Home/cajapiura.jpg'
import pacasmayo from '../../../public/assets/Trust/Home/pacasmayo.jpg'
import oncosalud from '../../../public/assets/Trust/Home/oncosalud.jpg'
import toulouse from '../../../public/assets/Trust/Home/toulouse.jpg'
import cibertec from '../../../public/assets/Trust/Home/cibertec.jpg'
import pacifico from '../../../public/assets/Trust/Home/pacifico.jpg'
import belcorp from '../../../public/assets/Trust/Home/belcorp.jpg'
import shopstart from '../../../public/assets/Trust/Home/shopstart.jpg'
import semana from '../../../public/assets/Trust/Home/semana.jpg'
import tiendapet from '../../../public/assets/Trust/Home/tiendapet.jpg'
import scotiabank from '../../../public/assets/Trust/Home/scotiabank.jpg'
import cuidafarmacia from '../../../public/assets/Trust/Home/cuidafarmacia.jpg'

import bcp from '../../../public/assets/Trust/Home/bcp.jpg'
import bbva from '../../../public/assets/Trust/Home/bbva.jpg'
import bfalabella from '../../../public/assets/Trust/Home/bfalabella.jpg'
import nestle from '../../../public/assets/Trust/Home/nestle.jpg'
import abbott from '../../../public/assets/Trust/Home/abbott.jpg'
import auna from '../../../public/assets/Trust/Home/auna.jpg'
import yanbal from '../../../public/assets/Trust/Home/yanbal.jpg'
import cineplanet from '../../../public/assets/Trust/Home/cineplanet.jpg'
import entel from '../../../public/assets/Trust/Home/entel.jpg'
import claro from '../../../public/assets/Trust/Home/claro.jpg'
import rimac from '../../../public/assets/Trust/Home/rimac.jpg'
import bnp from '../../../public/assets/Trust/Home/bnp.jpg'
import protecta from '../../../public/assets/Trust/Home/protecta.jpg'
import alicorp from '../../../public/assets/Trust/Home/alicorp.jpg'
import upc from '../../../public/assets/Trust/Home/upc.jpg'
import interseguro from '../../../public/assets/Trust/Home/interseguro.jpg'

import cencosud from '../../../public/assets/Trust/Home/cencosud.jpg'
import grandvision from '../../../public/assets/Trust/Home/grandvision.jpg'
import sodimac from '../../../public/assets/Trust/Home/sodimac.jpg'
import ripley from '../../../public/assets/Trust/Home/ripley.jpg'
import falabella from '../../../public/assets/Trust/Home/falabella.jpg'
import telefonica from '../../../public/assets/Trust/Home/telefonica.jpg'
import equifax from '../../../public/assets/Trust/Home/equifax.jpg'
import canon from '../../../public/assets/Trust/Home/canon.jpg'
import gerardu from '../../../public/assets/Trust/Home/gerardu.jpg'
import mobil from '../../../public/assets/Trust/Home/mobil.jpg'
import laureate from '../../../public/assets/Trust/Home/laureate.jpg'
import loreal from '../../../public/assets/Trust/Home/loreal.jpg'
import gildemeister from '../../../public/assets/Trust/Home/gildemeister.jpg'
import ferreycorp from '../../../public/assets/Trust/Home/ferreycorp.jpg'
import utp from '../../../public/assets/Trust/Home/utp.jpg'
import mibanco from '../../../public/assets/Trust/Home/mibanco.jpg'

import style from '../Companies.module.scss'

import { motion } from 'framer-motion'
import { zoomIn } from '../../../utilities/global/motion'

const Partners = () => {
  return (
    // Seccion de prueba
    <motion.div
      className={style.companies}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'full' }}
    >
      <h2 className={style.companies_title}>
        Más de 100 empresas que ya confían en nosotros
     </h2>
     <motion.div
              className={style.companies_container_img}
              variants={zoomIn(0, 1.5)}
      >
      <div className={style.sliderrr}>
        <div className={style.sliderrr_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={rci.src} alt='rci' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={incarail.src} alt='incarail' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={sanfernando.src} alt='sanfernando' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={astrid.src} alt='astrid' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cajapiura.src} alt='cajapiura' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={pacasmayo.src} alt='pacasmayo' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={oncosalud.src} alt='oncosalud' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={toulouse.src} alt='toulouse' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cibertec.src} alt='cibertec' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={pacifico.src} alt='pacifico' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={belcorp.src} alt='belcorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={shopstart.src} alt='shopstart' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={semana.src} alt='semana' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={tiendapet.src} alt='tiendapet' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={scotiabank.src} alt='scotiabank' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cuidafarmacia.src} alt='cuidafarmacia' />
          </div>

        </div>
      </div>

      <div className={style.sliderrr2}>
        <div className={style.sliderrr2_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={bcp.src} alt='bcp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bbva.src} alt='bbva' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bfalabella.src} alt='bfalabella' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={nestle.src} alt='nestle' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={abbott.src} alt='abbott' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={auna.src} alt='auna' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={yanbal.src} alt='yanbal' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cineplanet.src} alt='cineplanet' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={entel.src} alt='entel' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={claro.src} alt='claro' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={rimac.src} alt='rimac' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bnp.src} alt='bnp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={protecta.src} alt='protecta' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={alicorp.src} alt='alicorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={upc.src} alt='upc' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={interseguro.src} alt='interseguro' />
          </div>

        </div>
      </div>

      <div className={style.sliderrr}>
        <div className={style.sliderrr_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={cencosud.src} alt='cencosud' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={grandvision.src} alt='grandvision' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={sodimac.src} alt='sodimac' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={ripley.src} alt='ripley' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={falabella.src} alt='falabella' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={telefonica.src} alt='telefonica' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={equifax.src} alt='equifax' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={canon.src} alt='canon' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={gerardu.src} alt='gerardu' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mobil.src} alt='mobil' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={laureate.src} alt='laureate' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={loreal.src} alt='loreal' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={gildemeister.src} alt='gildemeister' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={ferreycorp.src} alt='ferreycorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={utp.src} alt='utp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mibanco.src} alt='mibanco' />
          </div>

        </div>
      </div>
      </motion.div>
    </motion.div>

  // Fin de la seccion de prueba

  // Inicio del original
  // <div className={style.companies}>
  //   <h2 className={style.companies_title}>
  //     Algunas empresas que ya confían en nosotros.
  //   </h2>
  //   <div className={style.companies_container}>
  //     <div className={style.companies_container_img}>
  //       <img src={rimac.src} alt='rimac' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={protecta.src} alt='protecta' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={abbott.src} alt='abbott' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={semana.src} alt='semana' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={intersegura.src} alt='intersegura' />
  //     </div>
  //   </div>
  // </div>
  // Fin del original
  )
}

export default Partners
