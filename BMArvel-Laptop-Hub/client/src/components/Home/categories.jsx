import "./categories.css";

function Categories() {
  const brands = [
    "HP",
    "Dell",
    "Lenovo",
    "Apple",
    "ASUS",
    "Acer",
  ];

  return (
    <section className="categories">
      <h2>Shop by Brand</h2>

      <div className="brand-list">
        {brands.map((brand) => (
          <div key={brand} className="brand-card">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
