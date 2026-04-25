import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/bharadwajg2105"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="social-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/mayank-bhardwaj-14b54b278/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="social-icon" />
      </a>

      <a
        href="https://www.instagram.com/mayank.bharadwaj_"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;