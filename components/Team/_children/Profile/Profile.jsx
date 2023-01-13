import style from './Profile.module.scss'
import PropTypes from 'prop-types'
import linkedin from '../../../../public/assets/Services/Crm/Team/linkedin.svg'
const Profile = ({ img, fullName, bio, linkedIn, charge }) => {
  return (
    <div className={style.profile}>
      <div className={style.profile_container}>
        <div className={style.profile_container_top}>
          <img
            className={style.profile_container_top_img}
            src={img}
            alt={fullName}
          />
        </div>
        <div className={style.profile_container_bottom}>
          <p className={style.profile_container_bottom_fullname}>{fullName}</p>
          <p className={style.profile_container_bottom_charge}>{charge}</p>
          <p className={style.profile_container_bottom_bio}>{bio}</p>
          <div className={style.profile_container_bottom_social}>
            <a href={linkedIn} className={style.profile_container_bottom_social_linked}>
              Linkedin
            </a>
            <img
              className={style.profile_container_bottom_social_logo}
              src={linkedin.src}
              alt={'linkedin' + fullName}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  img: PropTypes.string,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  linkedIn: PropTypes.string,
  charge: PropTypes.string
}

export default Profile
