import ContactInfo from "./CantactIfno";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container col-xxl-10">

        <div className="text-center contact-heading">
          <h5 className="about-me">GET IN TOUCH</h5>
          <h1 className="who-i">Contact Me</h1>
          <p className="who-i-am contact-subtitle">
            Feel free to reach out to me for any questions, project inquiries,
            or just to say hello. I'll do my best to get back to you as soon as
            possible.
          </p>
        </div>

        <div className="row align-items-stretch g-4 py-4">
          <div className="col-12 col-lg-6">
            <ContactInfo />
          </div>

          <div className="col-12 col-lg-6">
            <div className="contact-form-box">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;