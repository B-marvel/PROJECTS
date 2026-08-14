import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <span className="hero-tag">
          BMArvel Laptop Hub
        </span>

        <h1>
          Premium Laptops <br />
          For Work, School & Gaming
        </h1>

        <p>
          Buy quality laptops at affordable prices.
          We also offer repairs, Windows installation,
          SSD upgrades and professional support.
        </p>

        <div className="hero-buttons">

       <Link to="/shop" className="shop-btn">
            Shop Now
          </Link>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>

        </div>

      </div>

      <div className="hero-image">
        <img
          src="/hero-laptop.webp"
          alt="Premium laptop"
        />
      </div>

    </section>
  );
}

export default Hero;