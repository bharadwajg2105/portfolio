import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaExpand } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import FullScreenImageView from "./FullScreenImageView";

const CertificateModal = ({ certificate, closeModal }) => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  if (!certificate) return null;

  if (isImageEnlarged) {
    return (
      <FullScreenImageView
        certificate={certificate}
        setIsImageEnlarged={setIsImageEnlarged}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content-dark-bg">
        <button className="close-modal-btn" onClick={closeModal}>
          ×
        </button>

        <h2 className="modal-title-light-text">
          <PiCertificate className="certifications-certifi-icon" />
          {certificate.title}
        </h2>

        <div className="certificate-image-section-center">
          <div
            className="image-hover-wrapper"
            onClick={() => setIsImageEnlarged(true)}
          >
            <img
              src={certificate.certificateImage}
              alt={certificate.title}
              className="certificate-image-large"
            />

            <div className="image-overlay">
              <button className="image-overlay-btn resume-view-btn">
                <FaExpand />
                Enlarge
              </button>
            </div>
          </div>
        </div>

        <div className="modal-bottom-details-container">
          <div className="certificate-details-section-dark">
            <h3>
              <MdVerified className="certification-verifiecation-icon" />
              Details
            </h3>

            <p>
              <strong>Organization:</strong> {certificate.organization}
            </p>
            <p>
              <strong>Date:</strong> {certificate.issuedDate}
            </p>

            {certificate.verificationLink && (
              <p>
                <strong>Verify:</strong>{" "}
                <a
                  href={certificate.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </p>
            )}
          </div>

          <div className="skills-acquired-section-dark">
            <h3>Skills</h3>

            <div className="skills-list-dark">
              {certificate.skills.map((skill, index) => (
                <span key={index} className="skill-tag-dark">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-acquired-section-dark mt-3">
          <h3>Summary</h3>
          <p>{certificate.summary}</p>
        </div>

        <div className="close-button-bottom">
          <button className="close-modal-btn-bottom" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
