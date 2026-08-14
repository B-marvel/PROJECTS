import { useState } from "react";
import "./Shop.css";

import SearchBar from "../components/Shop/SearchBar";
import BrandFilter from "../components/Shop/BrandFilter";
import ProductGrid from "../components/Shop/ProductGrid";

function Shop() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");

  return (
    <section className="shop-page">

      <h1>Our Laptops</h1>

      <p>Find quality laptops at affordable prices.</p>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BrandFilter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />

      <ProductGrid
        search={search}
        selectedBrand={selectedBrand}
      />
 
    </section>
  );
}

export default Shop;