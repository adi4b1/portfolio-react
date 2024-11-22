import React from "react";

import Info from "./Info";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
const Home = ({ InfoRef, skillRef, projectRef, experienceRef }) => {
  return (
    <div className="formain">
      <section ref={InfoRef} className="section">
        
        <Info />
      </section>
      <section ref={skillRef} className="section">
        <Skills />
      </section>
      <section ref={projectRef} className="section">
        <Projects />
      </section>
      <section ref={experienceRef} className="section">
        <Experience />
      </section>
    </div>
  );
};

export default Home;
