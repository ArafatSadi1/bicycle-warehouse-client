import axios from "axios";
import React from "react";
import {  Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useMyProducts from "../../hooks/useMyProducts";
import ManageInventory from "../ManageInventories/ManageInventory/ManageInventory";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useMyProducts();

  const handleMyProductDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://whispering-crag-62697.herokuapp.com/myProducts/${id}`;
      axios.delete(url)
          const remaining = myProducts?.filter((product) => product._id !== id);
          setMyProducts(remaining);
    }
  };

  return (
    <div className="my-5">
      <Container>
        <h3 className="text-center mb-5">Manage Your Product</h3>
        <Table className="border-dark" striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th className="text-center">product Name</th>
              <th className="text-center">Product Id</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {
            myProducts.map(product => 
              <ManageInventory
              key={product._id}
              product={product}
              handleProductDelete={handleMyProductDelete}
            ></ManageInventory>
            )
          }
        </Table>
        <div className="w-75 mx-auto my-5 p-3 bg-dark rounded">
          <Link
            to="/addProduct"
            className="btn btn-warning d-block mx-auto w-75 fw-bold"
          >
            Add New Product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MyProducts;
