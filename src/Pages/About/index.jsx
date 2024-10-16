import React from "react";
import { Collapse } from "../../Components/Collapse";
import { Banner } from "../../Components/Banner";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="banner">
        <Banner />
      </div>
      <Collapse title="Fiabilité" />
      <Collapse title="Respect" />
      <Collapse title="Service" />
      <Collapse title="Sécurité" />
    </div>
  );
}

export default About;
