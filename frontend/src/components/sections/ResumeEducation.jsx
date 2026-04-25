import { RiGraduationCapFill } from "react-icons/ri";

const ResumeEducation = () => {
  return (
    <>
      <h2 className="education-heding">
        <RiGraduationCapFill className="education-icon" />
        Education
      </h2>

      <div className="education-wrapper">

        <div className="education-item">
          <div className="education-dot"></div>
          <div className="education-content">
            <span className="education-date">2019 - 2020</span>
            <h3 className="education-title">High School</h3>
            <p className="education-subtitle">
              Kanha Makhan Public School,Mathura
            </p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-dot"></div>
          <div className="education-content">
            <span className="education-date">2021 - 2022</span>
            <h3 className="education-title">Intermediate</h3>
            <p className="education-subtitle">
             Kanha Makhan Public School,Mathura

            </p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-dot"></div>
          <div className="education-content">
            <span className="education-date">2023 - 2027</span>
            <h3 className="education-title">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="education-subtitle">
              GLA University, Mathura, UP
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default ResumeEducation;