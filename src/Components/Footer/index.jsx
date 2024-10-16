import Logo from "../../Assets/Logo_blanc.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
