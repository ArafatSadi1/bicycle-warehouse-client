import React from "react";
import {  Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {name, supplierName, price, about, picture, quantity, _id} = product;
  return (
    <Col sm={12} lg={4}>
      <div className="border shadow mx-3 mb-5 rounded-2">
        <Card.Img className="p-2" height={300} variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-5 text-start">{name}</Card.Title>
          <Card.Text className="text-start fw-light">
            {about}
          </Card.Text>
          <div className="d-flex justify-content-between">
              <p>Supplier: {supplierName}</p>
              <p>Available({quantity})</p>
          </div>
          <Card.Text className="text-start fw-bold">
            <span>$</span>{price}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="m-0 p-0 border-0">
            <Link to={`/update/${_id}`} className="btn btn-warning py-2 w-100 fw-bold fs-5">Stock Update</Link>
        </Card.Footer>
      </div>
    </Col>
  );
};

export default Product;
