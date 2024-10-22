import React from "react";
import imgBannerHome from "../../Assets/home-banner.png";
import KasaData from "../../Data/KasaData.json";
import { Cards } from "../../Components/Card";
import { Banner } from "../../Components/Banner";
import Logement from "../Logement";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="banner-home">
        <Banner texte="Chez vous, partout et ailleurs" image={imgBannerHome} />
      </div>
      <div className="choice-location">
        {KasaData.map((card) => {
          return (
            <div key={Logement.id}>
              <Link to={`/logement/${Logement.id}`}>
                <Cards title={card.title} image={card.cover} />
              </Link>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Home;
