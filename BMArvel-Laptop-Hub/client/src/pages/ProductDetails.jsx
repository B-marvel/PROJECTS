
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import laptops from "../data/laptops";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const laptop = laptops.find(
    (item) => item.id === Number(id)
  );

  if (!laptop) {
    return (
      <div className="product-not-found">
        <h2>Laptop not found.</h2>
        <Link to="/shop">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <section className="product-details-page">
      <div className="product-details">
        <div className="product-image-container">
          <img src={laptop.image} alt={laptop.name} />
        </div>

        <div className="product-info">
          <span className="product-label">
            {laptop.brand} LAPTOP
          </span>

          <h1>{laptop.name}</h1>

          <div className="product-rating">
            ⭐ {laptop.rating} / 5
          </div>

          <h2 className="product-price">
            ₦{laptop.price.toLocaleString("en-NG")}
          </h2>

          <div className="product-specs">
            <h3>Specifications</h3>
            <p>⚙️ Processor: {laptop.processor}</p>
            <p>🧠 RAM: {laptop.ram}</p>
            <p>💾 Storage: {laptop.storage}</p>
            <p>🖥️ Display: {laptop.display}</p>
          </div>

          <div className="product-description">
            <h3>Product Details</h3>
            <p>
              This {laptop.name} is a quality laptop suitable
              for work, school, business, browsing and everyday
              computing. It offers reliable performance and
              excellent value for your money.
            </p>
          </div>

          <div className="product-actions">
            <button
              className="product-cart-btn"
              onClick={() => addToCart(laptop)}
            >
              🛒 Add to Cart
            </button>

            <Link to="/shop" className="back-shop-btn">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
