import "./Banner.css";

export function Banner({ image, texte }) {
  return (
    <div>
      <img src={image} alt="banner" />
      <h1 className="banner-txt">{texte}</h1>
    </div>
  );
}
