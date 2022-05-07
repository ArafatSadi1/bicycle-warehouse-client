import React from "react";
import { Container, Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [products, setProducts] = useProducts([]);
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
      </Container>
    </div>
  );
};

export default ManageInventories;
