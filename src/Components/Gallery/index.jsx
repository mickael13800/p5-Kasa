/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import PrevImg from "../../Assets/Vector_left.png";
import NextImg from "../../Assets/Vector_right.png";
import "./Gallery.css";

export function Gallery({ image }) {
  // Initialiser l'état pour l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carroussel">
      {/* Afficher l'image actuelle */}
      <img
        className="photo-logement"
        src={image[currentIndex]}
        alt={`Logement image ${currentIndex + 1}`}
      />

      {/* Affiche les flèches et la numérotation seulement si plusieurs images */}
      {image.length > 1 && (
        <>
          <div className="navigation">
            <button onClick={prevImage}>
              <img className="prev-img" src={PrevImg} alt="Flèche précédente" />
            </button>
            <button onClick={nextImage}>
              <img className="next-img" src={NextImg} alt="Flèche suivante" />
            </button>
          </div>

          {/* Numérotation en bas de l'image */}
          <div className="counter">
            {currentIndex + 1}/{image.length}
          </div>
        </>
      )}
    </div>
  );
}
