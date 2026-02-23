import React, { useEffect, useState } from "react";
import "./App.css";

import Loader from "./components/loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FreelanceSection from "./components/FreelanceSection";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.classList.add("loading");

    const timer = setTimeout(() => {
      setLoading(false);

      // Enable scroll after loader
      document.body.classList.remove("loading");
    }, 3000); // 3 seconds (matches loader bar)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <FreelanceSection />
          <ProjectsSection />
          <Experience /> 
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
