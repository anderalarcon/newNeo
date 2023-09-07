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
        Más de 100 empresas confían en nosotros
     </h2>
     <motion.div
              className={style.companies_container_img}
              variants={zoomIn(0, 1.5)}
      >
      <div className={style.sliderrr}>
        <div className={style.sliderrr_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={rci.src} alt='cliente rci' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={incarail.src} alt='cliente incarail' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={sanfernando.src} alt='cliente sanfernando' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={astrid.src} alt='cliente astrid' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cajapiura.src} alt='cliente cajapiura' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={pacasmayo.src} alt='cliente pacasmayo' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={oncosalud.src} alt='cliente oncosalud' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={toulouse.src} alt='cliente toulouse' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cibertec.src} alt='cliente cibertec' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={pacifico.src} alt='cliente pacifico' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={belcorp.src} alt='cliente belcorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={shopstart.src} alt='cliente shopstart' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={semana.src} alt='cliente semana' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={tiendapet.src} alt='cliente tiendapet' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={scotiabank.src} alt='cliente scotiabank' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cuidafarmacia.src} alt='cliente cuidafarmacia' />
          </div>

        </div>
      </div>

      <div className={style.sliderrr2}>
        <div className={style.sliderrr2_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={bcp.src} alt='cliente bcp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bbva.src} alt='cliente bbva' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bfalabella.src} alt='cliente bfalabella' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={nestle.src} alt='cliente nestle' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={abbott.src} alt='cliente abbott' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={auna.src} alt='cliente auna' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={yanbal.src} alt='cliente yanbal' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={cineplanet.src} alt='cliente cineplanet' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={entel.src} alt='cliente entel' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={claro.src} alt='cliente claro' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={rimac.src} alt='cliente rimac' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={bnp.src} alt='cliente bnp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={protecta.src} alt='cliente protecta' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={alicorp.src} alt='cliente alicorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={upc.src} alt='cliente upc' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={interseguro.src} alt='cliente interseguro' />
          </div>

        </div>
      </div>

      <div className={style.sliderrr}>
        <div className={style.sliderrr_track}>
          <div className={style.sliderrr_track_imagen}>
            <img src={cencosud.src} alt='cliente cencosud' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={grandvision.src} alt='cliente grandvision' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={sodimac.src} alt='cliente sodimac' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={ripley.src} alt='cliente ripley' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={falabella.src} alt='cliente falabella' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={telefonica.src} alt='cliente telefonica' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={equifax.src} alt='cliente equifax' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={canon.src} alt='cliente canon' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={gerardu.src} alt='cliente gerardu' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mobil.src} alt='cliente mobil' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={laureate.src} alt='cliente laureate' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={loreal.src} alt='cliente loreal' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={gildemeister.src} alt='cliente gildemeister' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={ferreycorp.src} alt='cliente ferreycorp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={utp.src} alt='cliente utp' />
          </div>
          <div className={style.sliderrr_track_imagen}>
            <img src={mibanco.src} alt='cliente mibanco' />
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
  //       <img src={rimac.src} alt='cliente rimac' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={protecta.src} alt='cliente protecta' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={abbott.src} alt='cliente abbott' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={semana.src} alt='cliente semana' />
  //     </div>
  //     <div className={style.companies_container_img}>
  //       <img src={intersegura.src} alt='cliente intersegura' />
  //     </div>
  //   </div>
  // </div>
  // Fin del original
  )
}

export default Partners
