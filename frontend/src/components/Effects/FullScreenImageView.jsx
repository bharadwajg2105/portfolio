import React from "react";
import { FaTimes } from "react-icons/fa";

const FullScreenImageView = ({ certificate, setIsImageEnlarged }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content-dark-bg">
        <button
          className="close-fullscreen-btn"
          onClick={() => setIsImageEnlarged(false)}
        >
          <FaTimes />
        </button>

        <h2 className="fullscreen-title">{certificate.title}</h2>

        <div className="fullscreen-image-container">
          <img
            src={certificate.certificateImage}
            alt={certificate.title}
            className="fullscreen-certificate-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FullScreenImageView;
