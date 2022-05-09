import React from "react";
import { Button } from "react-bootstrap";

const ManageInventory = ({ product, handleProductDelete }) => {
  const { name, quantity, _id } = product;
  return (
    <tbody>
      <tr>
        <td className="text-center">{name}</td>
        <td className="text-center text-break">{_id}</td>
        <td className="text-center">{quantity}</td>
        <td className="text-center">
          <Button onClick={() => handleProductDelete(_id)} variant="danger">
           Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageInventory;
