import React from "react";
import { Button } from "react-bootstrap";

const ManageInventory = ({ product }) => {
  const { name, supplierName, price, about, picture, quantity, _id } = product;
  return (
    <tbody>
      <tr>
        <td className="text-center">{name}</td>
        <td className="text-center">{_id}</td>
        <td className="text-center">{price}</td>
        <td className="text-center">{quantity}</td>
        <td className="text-center">
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageInventory;
