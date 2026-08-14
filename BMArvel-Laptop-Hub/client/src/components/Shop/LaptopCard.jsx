import { Link } from "react-router-dom";
import "./LaptopCard.css";

function LaptopCard({ laptop }) {
  return (
    <div className="laptop-card">
      <img
        src={laptop.image}
        alt={laptop.name}
      />

      <div className="card-content">
        <h3>{laptop.name}</h3>

        <p>{laptop.specs}</p>

        <div className="rating">
          ⭐ {laptop.rating}
        </div>

        <h2>{laptop.price}</h2>

        <div className="buttons">
          <Link to={`/product/${laptop.id}`}>
            <button className="view-btn">
              View Details
            </button>
          </Link>

          <button className="cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;