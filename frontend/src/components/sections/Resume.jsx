import ResumeDownlod from "./ResumeDownlod";
import ResumeEducation from "./ResumeEducation";
import ResumeCertificate from "./ResumeCertificate";
import { IoMdStar } from "react-icons/io";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container col-xxl-10">

        <div className="text-center resume-heading">
          <h1 className="who-i">Education & Certifications</h1>
          <p className="who-i-am resume-subtitle">
            Here's a summary of my educational background and professional
            certifications. Download my complete resume for more detailed
            information.
          </p>
        </div>

        <div className="row align-items-start g-4 py-4">
          <div className="col-12 col-lg-7">
            <ResumeEducation />

            <h2 className="certifications-heding">
              <IoMdStar className="certifications-icon" />
              Certifications
            </h2>

            <ResumeCertificate />
          </div>

          <div className="col-12 col-lg-5">
            <ResumeDownlod />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;