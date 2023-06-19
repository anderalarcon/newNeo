import style from './Embedform.module.scss'
import HubspotForm from 'react-hubspot-form'

const Embedform = () => {
  return (
    <div className={`${style.hubspot_section}`} id="form">

      {/* <img src="https://i.postimg.cc/sXDr8MxR/section-d.png" alt="section-d" className={`${style.hubspot_img}`}/> */}

    <div className={`${style.hubspot_form_container}`}>
      {/* <h3 className={`${style.hubspot_pre_title}`}>Conversemos</h3> */}
      <h2 className={`${style.hubspot_title}`}>
      Gestiona eficazmente tu pipeline de experimentos
      </h2>
      {/* <h4 className={`${style.hubspot_post_title}`}>Estamos listos para conversar contigo</h4> */}

      <div className="">
      <HubspotForm
                portalId='21198826'
                formId="6565ddee-c59d-4af0-9f1d-376e01fff0ec"
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
