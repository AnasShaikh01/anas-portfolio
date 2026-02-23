import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgbvdna");

  return (
    <section id="contact" className="contact-section">

      {/* Title */}
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        viewport={{ once: true }}
      >
        Have a project in mind or just want to say hello? Drop me a message.
      </motion.p>

      {/* Form / Success */}
      {state.succeeded ? (
        <motion.p
          className="success-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✅ Thanks for your message! I’ll get back to you soon.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message 🚀"}
          </button>
        </motion.form>
      )}

      {/* Socials */}
      <motion.div
        className="socials"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com/in/anas-shaikh-8a289031b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/AnasShaikh01"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:anasshaikhnetworks@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://www.fiverr.com/anasshaikh01/"
          target="_blank"
          rel="noreferrer"
        >
          <FaBriefcase />
        </a>
      </motion.div>

    </section>
  );
};

export default Contact;