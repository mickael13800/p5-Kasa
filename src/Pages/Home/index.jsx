import React from "react";
import imgBannerHome from "../../Assets/home-banner.png";
import KasaData from "../../Data/KasaData.json";
import { Cards } from "../../Components/Cards";
import { Banner } from "../../Components/Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="banner-home">
        <Banner image={imgBannerHome} />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="choice-location">
        {KasaData.map((card) => {
          return <Cards key={card.id} title={card.title} image={card.cover} />;
        })}
      </div>
    </div>
  );
}

export default Home;
