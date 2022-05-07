import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="mx-5">
      <h2 className="my-3 text-center">Our Stock</h2>
      <Row>
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
      <div className="w-50 border mx-auto mb-5 p-3 shadow">
        <h3 className="text-center mb-3">Manage Your Products</h3>
        <Link
          to="/manage"
          className="btn btn-warning d-block mx-auto w-50 fw-bold"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Products;
