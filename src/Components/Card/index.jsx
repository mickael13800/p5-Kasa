import "./Cards.css";

export function Cards({ title, image }) {
  return (
    <div className="cards">
      <img src={image} alt="habitation en location" />
      <h3>{title}</h3>
    </div>
  );
}

export default Cards;
