import "./TrustedBrands.css";

function TrustedBrands() {
  const brands = ["HP", "Dell", "Lenovo", "ASUS", "Acer", "Apple"];

  return (
    <section className="trusted-brands">
      <div className="trusted-container">
        <div className="trusted-heading">
          <span>TRUSTED BRANDS</span>
          <h2>Shop Trusted Laptop Brands</h2>
          <p>
            We offer quality laptops from some of the world's most trusted
            technology brands.
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;