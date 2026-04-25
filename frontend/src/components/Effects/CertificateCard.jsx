import React from "react";
import { PiCertificate } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { TiEye } from "react-icons/ti";

const CertificateCard = ({ certificate, openModal }) => {
  return (
    <div className="col">
      <div className="card h-100 certifications-card">
        <div className="card-body-content">

          <h3 className="certifications-certifi">
            <PiCertificate className="certifications-certifi-icon" />
            {certificate.title}
          </h3>

          <p className="certification-verifiecation">
            <MdVerified className="certification-verifiecation-icon" />
            {certificate.organization}
          </p>

          <p className="certification-cal">
            <FaRegCalendar className="certification-cal-icon" />
            {certificate.issuedDate}
          </p>

          <div className="certification-view">
            <button
              className="certification-view-btn"
              onClick={() => openModal(certificate)}
            >
              <TiEye className="certification-view-icon" />
              View Certificate
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificateCard;