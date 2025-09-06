import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgbvdna"); // your Formspree ID

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hello? Drop me a message.
      </p>

      {state.succeeded ? (
        <p className="success-message">✅ Thanks for your message! I’ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input id="name" type="text" name="name" placeholder="Your Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input id="email" type="email" name="email" placeholder="Your Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea id="message" name="message" placeholder="Your Message" rows="5" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      )}

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/anas-shaikh-8a289031b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/AnasShaikh01" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:anasshaikhnetworks@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.fiverr.com/s/ak5LBaG" target="_blank" rel="noreferrer">
          <FaBriefcase />
        </a>
      </div>
    </section>
  );
};

export default Contact;
