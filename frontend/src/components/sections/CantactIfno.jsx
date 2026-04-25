import { FaLocationDot, FaEnvelope, FaPhone, FaGithub, FaLinkedin ,FaInstagram } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">

      <div className="loction-box">
        <FaLocationDot className="location-icon" />
        <div className="location-text">
          <p className="location-title">Location</p>
          <p className="location-desc">Mathura, Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="loction-box">
        <FaEnvelope className="location-icon" />
        <div className="location-text">
          <p className="location-title">Email</p>
          <p className="location-desc">bharadwajmayank2105@gmail.com</p>
        </div>
      </div>

      <div className="loction-box">
        <FaPhone className="location-icon" />
        <div className="location-text">
          <p className="location-title">Phone</p>
          <p className="location-desc">+91 7017421193</p>
        </div>
      </div>

      <h3 className="followme-heding">Follow Me</h3>

      <div className="social-links-box">
        <a href="https://github.com/bharadwajg2105"><FaGithub className="social-icon-f" /></a>
        <a href="https://www.linkedin.com/in/mayank-bhardwaj-14b54b278/"><FaLinkedin className="social-icon-f" /></a>
        <a href="https://www.instagram.com/mayank.bharadwaj_"><FaInstagram className="social-icon-f" /></a>
      </div>

    </div>
  );
};

export default ContactInfo;