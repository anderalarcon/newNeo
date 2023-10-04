import style from './Embedform.module.scss'
import HubspotForm from 'react-hubspot-form'

const Embedform = () => {
  return (
    <div className={`${style.hubspot}`} id="form">
      <h2 className={`${style.hubspot_title}`}>
        ¡Reinventa la manera de crear contenido, diseñar productos y conectar con tus clientes!
      </h2>
      <div className={`${style.hubspot_section}`} >

        {/* <img src="https://i.postimg.cc/sXDr8MxR/section-d.png" alt="section-d" className={`${style.hubspot_img}`}/> */}

        <div className={`${style.hubspot_form_container}`}>
        {/* <h3 className={`${style.hubspot_pre_title}`}>Conversemos</h3> */}
        {/* <h4 className={`${style.hubspot_post_title}`}>No esperes más para descubrir lo que nuestro producto puede hacer por ti. Agenda una reunión con nuestro equipo y juntos exploraremos cómo podemos ayudarte a alcanzar tus objetivos.</h4> */}

        <div className="">
        <HubspotForm
                  portalId='21198826'
                  formId="773bc98c-714a-4afd-a990-e9575a883cb2"
                  onSubmit={() => console.log('Submit!')}
                  onReady={(form) => console.log('Form ready!')}
                  loading={<div>Loading...</div>}
              />
        </div>
        </div>

        </div>
    </div>

  )
}
export default Embedform
