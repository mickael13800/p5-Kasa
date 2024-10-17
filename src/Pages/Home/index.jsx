import React from "react";
import { useState } from "react";
import KasaData from "../../Data/KasaData.json";
import { Cards } from "../../Components/Cards";
import { Banner } from "../../Components/Banner";
import "./Home.css";

function Home() {
  const [cards, setCards] = useState(KasaData);

  const cardsList = cards.map((card) => {
    return <Cards key={card.id} title={card.title} content={card.cover} />;
  });

  return (
    <div className="home">
      <div className="banner">
        <Banner />
      </div>
      <div className="choice-location">{cardsList}</div>
    </div>
  );
}

export default Home;
