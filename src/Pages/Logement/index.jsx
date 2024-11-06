/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams, Navigate } from "react-router-dom";
import KasaData from "../../data/KasaData.json";
import Collapse from "../../Components/Collapse";
import Gallery from "../../Components/Gallery";
import Rating from "../../Components/Rating";
import "./Logement.css";

export default function Logement() {
  const { id } = useParams();

  const logementData = KasaData.find((logement) => logement.id === id);

  return logementData ? (
    <main>
      <div className="logement-container">
        <Gallery image={logementData.pictures} />
        <div className="logement-details">
          <div className="description">
            <div className="habitation">
              <h2>{logementData.title}</h2>
              <p>{logementData.location}</p>
            </div>
            <div className="tags">
              {logementData.tags.map((tag, index) => (
                <span key={index} className="tag-item">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="note">
            <div className="host">
              <p>{logementData.host.name}</p>
              <img
                src={logementData.host.picture}
                alt="photo du propriétaire"
              />
            </div>
            <div className="rate">
              <Rating rating={parseInt(logementData.rating)} />
            </div>
          </div>
        </div>
        <div className="collapse-logement">
          <Collapse title="Description" content={logementData.description} />
          <Collapse
            title="Équipements"
            content={logementData.equipments.map((equipment, index) => (
              <li key={index} className="equipment-item">
                {equipment}
              </li>
            ))}
          />
        </div>
      </div>
    </main>
  ) : (
    <Navigate replace to={"/Error"} />
  );
}
