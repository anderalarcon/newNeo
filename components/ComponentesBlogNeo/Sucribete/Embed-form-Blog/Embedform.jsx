import style from './Embedform.module.scss'
import HubspotForm from 'react-hubspot-form'

const Embedform = () => {
  return (
    <div className={`${style.hubspot_section}`} id="form">

      {/* <img src="https://i.postimg.cc/sXDr8MxR/section-d.png" alt="section-d" className={`${style.hubspot_img}`}/> */}

    <div className={`${style.hubspot_form_container}`}>
      {/* <h4 className={`${style.hubspot_post_title}`}>Estamos listos para conversar contigo</h4> */}

      <div className="">
      <HubspotForm
                portalId='21198826'
                formId="b547eabd-3920-42e7-b64e-67f9f8cb9338"
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
