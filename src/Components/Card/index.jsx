import "./Card.css";

export default function Cards({ title, image }) {
  return (
    <div className="cards">
      <img src={image} alt="habitation en location" />
      <div className="overlay"></div>
      <h3>{title}</h3>
    </div>
  );
}
