import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            src={logo}
            alt="BMArvel Laptop Hub"
          />

          <p>
            Quality laptops and reliable computer
            solutions for work, school and everyday life.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <span>Laptop Sales</span>
          <span>Laptop Repairs</span>
          <span>Windows Installation</span>
          <span>SSD Upgrades</span>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <span>📞 08143767338</span>
          <span>✉️ support@bmarvel.com</span>
          <span>📍 Nigeria</span>
        </div>

      </div>

      <div className="footer-bottom">

  <p>
    © 2026 BMArvel Laptop Hub. All rights reserved.
  </p>

  <div className="footer-social">

    <a href="#" aria-label="Facebook">
      f
    </a>

    <a href="#" aria-label="Instagram">
      ig
    </a>

    <a href="#" aria-label="TikTok">
      t
    </a>

    <a href="#" aria-label="WhatsApp">
      w
    </a>

  </div>

</div>  </footer>
  );
}

export default Footer;