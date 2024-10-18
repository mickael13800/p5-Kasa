import React from "react";
import imgBannerAbout from "../../Assets/about-banner.png";
import EngagementsData from "../../Data/Engagements.json";
import { Collapse } from "../../Components/Collapse";
import { Banner } from "../../Components/Banner";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="banner-about">
        <Banner image={imgBannerAbout} />
      </div>
      <div className="collapse-container">
        {EngagementsData.map((engagement) => {
          return (
            <Collapse
              key={engagement.id}
              title={engagement.title}
              content={engagement.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
