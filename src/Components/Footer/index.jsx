import Logo from "../../Assets/Logo_blanc.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <img src={Logo} alt="logo kasa" />
      <p>© {currentYear} Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
