import { useState } from "react";
import ArrowUp from "../../Assets/arrow_back_top.png";
import "./Collapse.css";

export function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-bar">
        <h3>{title}</h3>
        <img
          className={`arrow-up ${isOpen ? "true" : ""}`}
          src={ArrowUp}
          alt="Afficher la description"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <span className="collapse-description">{isOpen && <p>{content}</p>}</span>
    </div>
  );
}
