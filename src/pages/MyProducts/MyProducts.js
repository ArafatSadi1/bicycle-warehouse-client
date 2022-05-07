import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import ManageInventory from "../ManageInventories/ManageInventory/ManageInventory";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";

const MyProducts = () => {
  // const [user] = useAuthState(auth);
  const { email } = useParams();
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);
  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if(proceed){
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myProducts.filter(product => product._id !== id)
          setMyProducts(remaining);
        });  
    }
  };

  return (
    <div className="my-5">
      <Container>
          <h3 className="text-center mb-5">Manage Your Product</h3>
        <Table className="border-dark" striped bordered hover responsive="sm" >
          <thead>
            <tr>
              <th className="text-center">product Name</th>
              <th className="text-center">Product Id</th>
              <th className="text-center">Price</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {myProducts.map((product) => (
            <ManageInventory
              key={product._id}
              product={product}
              handleProductDelete={handleProductDelete}
            ></ManageInventory>
          ))}
        </Table>
        <div className="w-50 mx-auto my-5 p-3 bg-dark rounded">
        <Link
          to="/addProduct"
          className="btn btn-warning d-block mx-auto w-50 fw-bold"
        >
          Add New Product
        </Link>
        </div>
      </Container>
    </div>
  );
};

export default MyProducts;
