import React, { useState, useContext, useEffect } from "react";
import { ProdContext } from "../context/ProdContext";

const ProductForm = ({ onClose }) => {
  const { addProduct, editProduct, selectedProduct } = useContext(ProdContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setQuantity(selectedProduct.quantity);
      setPrice(selectedProduct.price);
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      editProduct(selectedProduct._id, { name, quantity, price, image });
    } else {
      addProduct({ name, quantity, price, image });
    }
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setQuantity("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="url"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
        />
      </div>
      <div className="d-flex justify-content-end gap-3">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
