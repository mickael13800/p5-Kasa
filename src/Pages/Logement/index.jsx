import React from "react";
import { Collapse } from "../../Components/Collapse";
import "./Logement.css";

function Logement() {
  return (
    <div className="logement-container">
      <div className="carroussel"></div>
      <div className="description">
        <div className="habitation"></div>
        <div className="host"></div>
      </div>
      <div className="note">
        <div className="tag"></div>
        <div className="rate"></div>
      </div>
      <div className="collapse-logement">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Logement;
