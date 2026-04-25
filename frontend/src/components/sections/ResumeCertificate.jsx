import React, { useState } from "react";
import certificateList from "../../Data/certificateList";
import CertificateCard from "../Effects/CertificateCard";
import CertificateModal from "../Effects/CertificateModal";

const ResumeCertificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="resume-certificates">
      <div className="row g-4 py-4">
        {certificateList.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            openModal={openModal}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        closeModal={closeModal}
      />
    </section>
  );
};

export default ResumeCertificate;