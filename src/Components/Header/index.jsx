import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo_couleur.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
