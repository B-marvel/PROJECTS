import { useParams } from "react-router-dom";
import laptops from "../data/laptops";

function ProductDetails() {
  const { id } = useParams();

  const laptop = laptops.find((item) => item.id === Number(id));

  if (!laptop) {
    return <h2>Laptop not found.</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={laptop.image}
        alt={laptop.name}
      />

      <h1>{laptop.name}</h1>

      <p>{laptop.specs}</p>

      <h2>{laptop.price}</h2>

      <p>⭐ {laptop.rating}</p>

      <button>Add to Cart</button>

    </div>
  );
}

export default ProductDetails;