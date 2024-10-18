import ArrowUp from "../../Assets/arrow_back_top.png";
import "./Collapse.css";

export function Collapse({ title, content }) {
  return (
    <div className="collapse">
      <div className="collapse-bar">
        <h3>{title}</h3>
        <img className="arrow-up" src={ArrowUp} alt="Afficher la description" />
      </div>
      <span className="collapse-description">{content}</span>
    </div>
  );
}
