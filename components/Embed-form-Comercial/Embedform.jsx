import style from './Embedform.module.scss'
import HubspotForm from 'react-hubspot-form'

const Embedform = () => {
  return (
    <div className={`${style.hubspot_section}`} id="form">

      {/* <img src="https://i.postimg.cc/sXDr8MxR/section-d.png" alt="section-d" className={`${style.hubspot_img}`}/> */}

    <div className={`${style.hubspot_form_container}`}>
      {/* <h3 className={`${style.hubspot_pre_title}`}>Conversemos</h3> */}
      <h2 className={`${style.hubspot_title}`}>
        Empieza a mejorar tu estrategia SEO
      </h2>
      <h4 className={`${style.hubspot_post_title}`}>No esperes más para descubrir lo que nuestro producto puede hacer por ti. Agenda una reunión con nuestro equipo y juntos exploraremos cómo podemos ayudarte a alcanzar tus objetivos.</h4>

      <div className="">
      <HubspotForm
                portalId='21198826'
                formId="bda07fd1-125b-4c46-808e-b7eb5dfabffc"
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
      </div>
    </div>

    </div>
  )
}
export default Embedform
