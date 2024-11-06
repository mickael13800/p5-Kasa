import React from "react";
import imgBannerHome from "../../Assets/home-banner.png";
import KasaData from "../../data/KasaData.json";
import Cards from "../../Components/Card";
import Banner from "../../Components/Banner";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="banner-home">
          <Banner
            texte="Chez vous, partout et ailleurs"
            image={imgBannerHome}
          />
        </div>
        <div className="choice-location">
          {KasaData.map((card) => {
            return (
              <div className="card-location" key={card.id}>
                <Link to={`/logement/${card.id}`}>
                  <Cards title={card.title} image={card.cover} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
