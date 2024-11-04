import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="card m-3 p-2 shadow hover-shadow">
      <div className="card-img">
        <img src={product.image} className="card-img-top" alt={product.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <p className="card-text">Quantity: {product.quantity}</p>
        <div className="button-group">
          <button
            className="btn btn-primary me-3"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger me-3"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
