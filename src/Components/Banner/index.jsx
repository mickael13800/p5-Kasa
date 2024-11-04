import "./Banner.css";

export default function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière avec paysage" />
      <h1 className="banner-txt">{texte}</h1>
    </div>
  );
}
