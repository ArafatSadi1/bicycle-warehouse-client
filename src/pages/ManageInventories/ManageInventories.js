import React from "react";
import { Container, Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [products, setProducts] = useProducts([]);
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
            ></ManageInventory>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default ManageInventories;
