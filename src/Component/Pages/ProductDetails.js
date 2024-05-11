import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>{productDetails.title}</h2>
          <p>Description: {productDetails.description}</p>
          <p>Price: Rs {productDetails.price}</p>
          <p>Category: {productDetails.category}</p>
        </div>
      </div>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className="text-center mt-5">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
