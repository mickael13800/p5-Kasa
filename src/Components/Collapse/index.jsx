import ChevronClose from "../../Assets/arrow_back_top.png";
import "./Collapse.css";

export function Collapse({ title }) {
  return (
    <div className="collapse-bar">
      <h3>{title}</h3>
      <img src={ChevronClose} alt="chevron pour ouvrir la collapse" />
    </div>
  );
}
