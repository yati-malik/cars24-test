import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import Searchbar from "../../Components/Searchbar/searchbar";
import ProductGrid from '../../Components/ProductGrid/productGrid';

function HomePage() {
  return (
    <div className="app-container">
      <Sidebar />
      <Searchbar />
      <ProductGrid />
    </div>
  );
}

export default HomePage;
