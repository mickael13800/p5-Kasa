/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collapse } from "../../Components/Collapse";
import KasaData from "../../data/KasaData.json";
import { Gallery } from "../../Components/Gallery";
import Rating from "../../Components/Rating";
import "./Logement.css";

function Logement() {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const [logementData, setLogementData] = useState(null); // Pour stocker les détails du logement

  useEffect(() => {
    // Trouver le logement correspondant à l'ID récupéré
    const logement = KasaData.find((logement) => logement.id === id);

    // Si le logement est trouvé, on met à jour le state
    if (logement) {
      setLogementData(logement);
    } else {
      console.error("Logement non trouvé");
    }
  }, [id]); // Dépendance sur l'ID

  // Si les données du logement ne sont pas encore chargées, on peut afficher un loader ou un message
  if (!logementData) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="logement-container">
      <Gallery image={logementData.pictures} />
      <div className="description">
        <div className="habitation">
          <h2 {...KasaData}>{logementData.title}</h2>
          <p {...KasaData}>{logementData.location}</p>
        </div>
        <div className="host">
          <p>{logementData.host.name}</p>
          <img src={logementData.host.picture} alt="photo du propriétaire" />
        </div>
      </div>
      <div className="note">
        <div className="tags">
          {logementData.tags.map((tag, index) => (
            <span key={index} className="tag-item">
              {tag}
            </span>
          ))}
        </div>
        <div className="rate">
          <Rating rating={parseInt(logementData.rating)} />
        </div>
      </div>
      <div className="collapse-logement">
        <Collapse title="Description" content={logementData.description} />
        <Collapse
          title="Équipements"
          content={logementData.equipments.map((equipments, index) => (
            <li key={index} className="equipment-item">
              {equipments}
            </li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
