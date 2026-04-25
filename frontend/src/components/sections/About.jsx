import WhatIDo from "./AboutCard";
import AboutJourney from "./AboutHero";

const About = () => {
  return (
    <section id="about-sec" className="about-section container">
      <div className="about-heading text-center">
        <h5 className="about-me">ABOUT ME</h5>
        <h1 className="who-i">Who I Am</h1>

        <p className="who-i-am mx-auto">
          I am a passionate Full Stack Web Developer with a strong focus on
          creating modern, responsive, and user-friendly applications. I enjoy
          working with cutting-edge technologies and delivering clean, efficient
          code.
        </p>
      </div>

      <AboutJourney />
      <WhatIDo />
    </section>
  );
};

export default About;