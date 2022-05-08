import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [products, setProducts] = useProducts([]);
  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if(proceed){
      const url = `https://whispering-crag-62697.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter(product => product._id !== id)
          setProducts(remaining)
        });  
    }
  };
  return (
    <div className="my-5">
      <Container>
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
          {products.map((product) => (
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

export default ManageInventories;
