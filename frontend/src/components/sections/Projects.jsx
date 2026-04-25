import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="text-center">
        <h5 className="about-me">MY PROJECTS</h5>
        <h1 className="who-i">Recent Work</h1>

        <p className="who-i-am mx-auto">
          Here are some of the projects I've built that demonstrate my skills
          and experience. Each project is briefly described with links to code
          repositories and live demos.
        </p>
      </div>

      <ProjectCard />

      <div className="text-center mt-4">
        <a
          href="https://github.com/bharadwajg2105?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn send-btn Project-btn">
            <FaGithub className="social-icon-p" />
            View More Projects on GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;