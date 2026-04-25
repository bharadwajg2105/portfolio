import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="footer-wrapper">
        {/* Left Side */}
        <div className="footer-left">
          <h4 className="footer-name">Mayank Bhardwaj</h4>

          <p className="copywright-text footer-desc">
            Full Stack Web Developer building modern, responsive, and
            user-friendly applications.
          </p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <ul className="footer-social-list">
            <li>
              <a
                className="icon-footer"
                href="https://github.com/bharadwajg2105"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </li>

            <li>
              <a
                className="icon-footer"
                href="https://www.linkedin.com/in/mayank-bhardwaj-14b54b278/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>

         

            <li>
              <a
                className="icon-footer"
                href="https://www.instagram.com/mayank.bharadwaj_"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          <span className="copywright-text footer-copy">
            © 2026 Mayank Bhardwaj. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;