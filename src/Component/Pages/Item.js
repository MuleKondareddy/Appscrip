import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  // Calculate image dimensions based on device screen size
  const screenWidth = window.innerWidth;
  const imageWidth = screenWidth > 768 ? 300 : 200; // Adjust dimensions based on your requirements
  const imageHeight = screenWidth > 768 ? 200 : 150; // Adjust dimensions based on your requirements

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            maxWidth: "100%",
          }}
        />
        <h5 className="text-danger">Rs {product.price}</h5>
        <Link to={`/productdetails/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Item;
