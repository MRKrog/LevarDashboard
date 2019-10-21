import React, { Component } from "react";
import ProductsTable from "./ProductsTable"

class Products extends Component {
  render() {

    return (
      <div className="products dashboard-container">
        <ProductsTable />
      </div>
    );
  }
}

export default Products;
