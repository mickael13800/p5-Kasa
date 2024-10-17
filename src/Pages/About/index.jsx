import React from "react";
import { useState } from "react";
import EngagementsData from "../../Data/Engagements.json";
import { Collapse } from "../../Components/Collapse";
import { Banner } from "../../Components/Banner";
import "./About.css";

function About() {
  const [engagements, setEngagements] = useState(EngagementsData);

  const engagementsList = engagements.map((engagement) => {
    return (
      <Collapse
        key={engagement.id}
        title={engagement.title}
        content={engagement.text}
      />
    );
  });

  return (
    <div className="about">
      <div className="banner-about">
        <Banner />
      </div>
      <div className="collapse-container">{engagementsList}</div>
    </div>
  );
}

export default About;
