import "./BrandFilter.css";

const brands = [
  "All",
  "HP",
  "Dell",
  "Lenovo",
  "ASUS",
];

function BrandFilter({ selectedBrand, setSelectedBrand }) {
  return (
    <div className="brand-filter">
      {brands.map((brand) => (
        <button
          key={brand}
          className={selectedBrand === brand ? "active" : ""}
          onClick={() => setSelectedBrand(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

export default BrandFilter;