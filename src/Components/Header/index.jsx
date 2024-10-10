import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo_couleur.png";
import "../../Sass/Header.scss";

function Header() {
  return (
    <div className="banner">
      <img src={Logo} alt="logo kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
