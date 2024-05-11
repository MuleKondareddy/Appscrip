import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to handle sorting based on price
  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  // Function to handle sorting based on title
  const sortProductsByTitle = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setProducts(sortedProducts);
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
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="row">
            {products.map((product) => (
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
