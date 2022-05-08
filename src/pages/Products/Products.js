import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div id="products" className="container">
      <h1 className="my-5 text-center fw-bold">Our Products</h1>
      <Row>
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
      <div className="w-75 border mx-auto mb-5 p-3 shadow bg-dark rounded">
        <Link
          to="/manage"
          className="btn btn-warning d-block mx-auto w-75 fw-bold"
        >
          Manage Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
