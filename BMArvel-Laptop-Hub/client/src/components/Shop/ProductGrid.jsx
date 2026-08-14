import "./ProductGrid.css";
import LaptopCard from "./LaptopCard";
import laptops from "../../data/laptops";

function ProductGrid({ search, selectedBrand }) {

  const filteredLaptops = laptops.filter((laptop) => {
    const matchesSearch = laptop.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" ||
      laptop.name.startsWith(selectedBrand);

    return matchesSearch && matchesBrand;
  });

  return (
    <div className="product-grid">
      {filteredLaptops.map((laptop) => (
        <LaptopCard
          key={laptop.id}
          laptop={laptop}
        />
      ))}
    </div>
  );
}

export default ProductGrid;