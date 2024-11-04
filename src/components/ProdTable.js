import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>
              <img src={product.image} alt={product.name} width="50" />
            </td>
            <td>{product.name}</td>
            <td>₹{product.price}</td>
            <td>{product.quantity}</td>
            <td>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
