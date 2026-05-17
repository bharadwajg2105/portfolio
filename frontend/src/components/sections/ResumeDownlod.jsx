import { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import imagePath from "../../assets/resume/image.png";

const ResumeDownlod = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const resumeTitle = "Resume Preview";
  // ✅ Correct path: files in public/ are served from root
  const pdfPath = "/myank_bhardwaj_resume.pdf";

  return (
    <>
      <div className="resume-side-box">

        <div className="download-card">
          <h3 className="download-heding">Download Resume</h3>

          <p className="download-text">
            For a complete overview of my skills, education, and projects,
            please download my detailed resume.
          </p>

          {/* ✅ Force correct filename when downloading */}
          <a href={pdfPath} download="Mayank_Bhardwaj_Resume.pdf" className="download-btn-link">
            <button className="download-btn">
              <MdFileDownload className="download-icon" />
              Download PDF
            </button>
          </a>
        </div>

        <div
          className="image-hover-wrapper resume-preview-box"
          onClick={() => setIsImageEnlarged(true)}
        >
          <img
            src={imagePath}
            className="resume-img"
            alt="resume preview"
          />

          <div className="image-overlay resume-overlay">
            <button className="image-overlay-btn resume-view-btn">
              <TiEye />
              View Resume
            </button>
          </div>
        </div>

      </div>

      {isImageEnlarged && (
        <div className="modal-overlay">
          <div className="modal-content-dark-bg">
            <button
              onClick={() => setIsImageEnlarged(false)}
              className="close-fullscreen-btn"
            >
              Close
            </button>

            <h2 className="fullscreen-title">{resumeTitle}</h2>

            <div className="fullscreen-image-container">
              <img
                src={imagePath}
                alt={resumeTitle}
                className="fullscreen-certificate-image-resume"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeDownlod;
