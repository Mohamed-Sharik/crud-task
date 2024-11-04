import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ProductProvider } from "./context/ProdContext";
import ProductsCardView from "./pages/ProdCardView";
import ProductsTableView from "./pages/ProdTableView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included

const App = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <ProductProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>
                  Card View
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/table"
                  onClick={handleLinkClick}
                >
                  Table View
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductsCardView />} />
            <Route path="/table" element={<ProductsTableView />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
