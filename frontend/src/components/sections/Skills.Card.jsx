import { AiFillDatabase } from "react-icons/ai";
import { TbTool } from "react-icons/tb";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const SkillCard = () => {
  return (
    <>
      {/* 1 Mobile | 2 Tablet | 4 Large */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 py-5 what-i-do-box">
        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="service-icon-wrapper mb-3">
                <BsCreditCard2FrontFill className="skill-icon-f" />
              </div>

              <h3 className="what-do">Frontend</h3>
              <hr className="skill-hr" />

              <div className="skills">
                <span className="skill-in-card-f">React.js</span>
                <span className="skill-in-card-f">JavaScript</span>
                <span className="skill-in-card-f">HTML5</span>
                <span className="skill-in-card-f">CSS3</span>
                <span className="skill-in-card-f">Redux</span>
                <span className="skill-in-card-f">Tailwind CSS</span>
                <span className="skill-in-card-f">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="service-icon-wrapper mb-3 d-flex gap-1">
                <IoChevronBackOutline className="skill-icon-b" />
                <IoChevronForwardOutline className="skill-icon-b" />
              </div>

              <h3 className="what-do">Backend</h3>
              <hr className="skill-hr" />

              <div className="skills">
                <span className="skill-in-card-b">Node.js</span>
                <span className="skill-in-card-b">Express.js</span>
                <span className="skill-in-card-b">EJS</span>
                <span className="skill-in-card-b">RESTful APIs</span>
                <span className="skill-in-card-b">Authentication</span>
                <span className="skill-in-card-b">JWT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="service-icon-wrapper mb-3">
                <AiFillDatabase className="skill-icon-d" />
              </div>

              <h3 className="what-do">Database</h3>
              <hr className="skill-hr" />

              <div className="skills">
                <span className="skill-in-card-d">MongoDB</span>
                <span className="skill-in-card-d">MySQL</span>
                <span className="skill-in-card-d">Mongoose</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="service-icon-wrapper mb-3">
                <TbTool className="skill-icon-t" />
              </div>

              <h3 className="what-do">Other Tools</h3>
              <hr className="skill-hr" />

              <div className="skills">
                <span className="skill-in-card-t">Docker</span>
                <span className="skill-in-card-t">GitHub</span>
                <span className="skill-in-card-t">Git</span>
                <span className="skill-in-card-t">AWS</span>
                <span className="skill-in-card-t">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;