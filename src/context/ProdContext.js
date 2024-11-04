import React, { createContext, useState, useEffect } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../ApiURL";

export const ProdContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await createProduct(product);
      setProducts((prev) => [...prev, response.data]);
      setNotification("Product added successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const editProduct = async (id, updatedProduct) => {
    try {
      const response = await updateProduct(id, updatedProduct);
      setProducts((prev) =>
        prev.map((product) => (product._id === id ? response.data : product))
      );
      setNotification("Product updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product._id !== id));
      setNotification("Product deleted successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const clearNotification = () => setNotification("");
  const setProductForEdit = (product) => setSelectedProduct(product);

  return (
    <ProdContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        editProduct,
        removeProduct,
        notification,
        clearNotification,
        selectedProduct,
        setProductForEdit,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};
