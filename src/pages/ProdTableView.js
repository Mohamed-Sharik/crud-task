import React, { useContext, useState } from "react";
import { ProdContext } from "../context/ProdContext";
import ProdTable from "../components/ProdTable";
import ProdForm from "../components/ProdForm";
import UserUpd from "../components/UserUpd";

const ProductsTableView = () => {
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
      <ProdTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={removeProduct}
      />
    </div>
  );
};

export default ProductsTableView;
