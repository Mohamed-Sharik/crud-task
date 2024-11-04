import React, { useContext, useState } from "react";
import { ProdContext } from "../context/ProdContext";
import ProdCard from "../components/ProdCard";
import ProdForm from "../components/ProdForm";
import UserUpd from "../components/UserUpd";

const ProductsCardView = () => {
  const {
    products,
    loading,
    error,
    notification,
    clearNotification,
    setProductForEdit,
    removeProduct,
  } = useContext(ProdContext);
  const [showForm, setShowForm] = useState(false);

  const handleEditProduct = (product) => {
    setProductForEdit(product);
    setShowForm(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Products</h1>
      {notification && (
        <UserUpd message={notification} clear={clearNotification} />
      )}
      <button
        className="btn btn-success mb-3"
        onClick={() => {
          setProductForEdit(null); // Reset for adding a new product
          setShowForm(true);
        }}
      >
        Add Product
      </button>

      {showForm && <ProdForm onClose={() => setShowForm(false)} />}
      <div className="d-flex flex-wrap con-wrap">
        {products.map((product) => (
          <ProdCard
            key={product._id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={removeProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCardView;
