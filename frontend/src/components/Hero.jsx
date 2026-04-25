import ActionButtons from "./ActionButtons";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="container Hero-sec" id="home">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Intro Content */}
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <h5 className="greeting">Hello, I'm</h5>

          <h1 className="name-heading">
            Mayank Bhardwaj
          </h1>

          <h2 className="title-heading">
            I'm a Software Engineer
          </h2>

          <p className="description-text mx-auto mx-lg-0">
            Passionate about creating modern web applications with cutting-edge
            technologies. Focused on delivering clean code and exceptional user
            experiences.
          </p>

          <SocialLinks />

          <ActionButtons />

        </div>

        {/* Image Below on Mobile / Right on Desktop */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="profile-picture-container">
            <img
              src="#"
              alt="Mayank Bhardwaj"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;