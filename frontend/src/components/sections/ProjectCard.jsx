import projectList from "../../Data/projectList";
import { FaGithub } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const ProjectCard = () => {
  return (
    /* 1 Mobile | 2 Tablet | 3 Large */
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-5 what-i-do-box">
      {projectList.map((project) => (
        <div className="col d-flex" key={project.id}>
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg what-i-do-card w-100">
            <img
              className="project-img"
              src={project.imageSrc}
              alt={project.title}
            />

            <div className="d-flex flex-column h-100 p-4">
              <h3 className="what-do">{project.title}</h3>

              <p className="project-des">{project.description}</p>

              <div className="projects-skill">
                {project.skills.map((skill, index) => (
                  <span className="projects-skills" key={index}>
                    {skill}
                  </span>
                ))}

                {project.extraSkillsCount > 0 && (
                  <span className="projects-skills-ex">
                    +{project.extraSkillsCount}
                  </span>
                )}
              </div>

              <div className="view-project mt-auto">
                {/* <a
                  className="project-git"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project-social-icon" />
                  GitHub
                </a> */}

                <a
                  className="project-git"
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <IoMdSend className="project-social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;