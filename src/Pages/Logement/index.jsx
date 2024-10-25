import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collapse } from "../../Components/Collapse";
import KasaData from "../../data/KasaData.json";
import "./Logement.css";
import { Gallery } from "../../Components/Gallery";

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
        <div className="habitation"></div>
        <div className="host"></div>
      </div>
      <div className="note">
        <div className="tags"></div>
        <div className="rate"></div>
      </div>
      <div className="collapse-logement">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Logement;
