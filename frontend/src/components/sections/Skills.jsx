import SkillCard from "./Skills.Card";

const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className="text-center">
        <h5 className="about-me">MY SKILLS</h5>
        <h1 className="who-i">Technical Expertise</h1>

        <p className="who-i-am mx-auto">
          I have experience working with a variety of technologies across the
          full stack development spectrum. Here are the key technologies and
          tools I'm proficient with:
        </p>
      </div>

      <SkillCard />
    </section>
  );
};

export default Skills;