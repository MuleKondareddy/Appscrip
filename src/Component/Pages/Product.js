import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [products, category]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProducts = () => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  // Function to handle sorting based on price
  const sortProductsByPrice = (order) => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sortedProducts);
  };

  // Function to handle sorting based on title
  const sortProductsByTitle = () => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setFilteredProducts(sortedProducts);
  };

  // Function to handle category selection
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <h1 className="text-center">Welcome to Products Page</h1>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          {/* Filter options */}
          <div className="card mb-3">
            <div className="card-body">
              <h5>Sort By:</h5>
              <button
                className="btn btn-link"
                onClick={() => sortProductsByPrice("asc")}
              >
                Price: Low to High
              </button>
              <button
                className="btn btn-link"
                onClick={() => sortProductsByPrice("desc")}
              >
                Price: High to Low
              </button>
              <button
                className="btn btn-link"
                onClick={() => sortProductsByTitle()}
              >
                Title: A-Z
              </button>

              <h5>Filter By Category:</h5>
              <button
                className="btn btn-link"
                onClick={() => handleCategoryChange("all")}
              >
                All
              </button>
              <button
                className="btn btn-link"
                onClick={() => handleCategoryChange("men")}
              >
                Men
              </button>
              <button
                className="btn btn-link"
                onClick={() => handleCategoryChange("women")}
              >
                Women
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 col-sm-12 mb-2 mt-2 text-center"
              >
                <Item product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
