import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";

import hpElitebook from "../../assets/images/hp-elitebook.webp";
import dellLatitude from "../../assets/images/dell-latitude.jpg";
import lenovoThinkpad from "../../assets/images/lenovo-thinkpad.jpg";

const products = [
  {
    id: 1,
    name: "HP EliteBook",
    description: "Powerful performance for work and school.",
    price: 420000,
    rating: 4.8,
    image: hpElitebook,
  },
  {
    id: 2,
    name: "Dell Latitude",
    description: "Reliable business laptop with great performance.",
    price: 380000,
    rating: 4.7,
    image: dellLatitude,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad",
    description: "Built for productivity, business and everyday use.",
    price: 400000,
    rating: 4.9,
    image: lenovoThinkpad,
  },
];

function FeaturedProducts() {
  const { addToCart } = useCart();
  return (
    <section className="featured-products">

      <div className="section-heading">
        <span>OUR COLLECTION</span>

        <h2>Featured Laptops</h2>

        <p>
          Explore some of our most popular laptops,
          selected for performance, quality and value.
        </p>
      </div>

      <div className="featured-grid">

        {products.map((product) => (
          <div className="featured-card" key={product.id}>

            <div className="featured-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="featured-content">

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="rating">
                <span>★★★★★</span>
                <strong>{product.rating}</strong>
              </div>

              <div className="featured-bottom">
                <strong className="price">
                  ₦{product.price.toLocaleString("en-NG")}
                </strong>
              </div>

              <div className="product-actions">

                <Link
                  to={`/product/${product.id}`}
                  className="view-btn"
                >
                  👀 View Details
                </Link>

<button
  className="cart-btn"
  onClick={() => addToCart(product)}
>
  🛒 Add to Cart
</button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;