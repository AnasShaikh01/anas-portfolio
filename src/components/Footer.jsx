import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p className="built">Designed & Built by Anas Shaikh</p>
      <p className="quote">“Turning Ideas into Clean & Modern Web Experiences”</p>
      <p className="copyright">© 2025 Anas Shaikh. All Rights Reserved.</p>
      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
