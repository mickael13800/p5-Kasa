import "./Cards.css";

export function Cards({ title, cover }) {
  return (
    <div className="cards">
      <img src={cover} alt="habitation en location" />
      <h3>{title}</h3>
    </div>
  );
}

export default Cards;
