import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [soldOut, setSoldOut] = useState("");
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const handleDelivered = (product) => {
    const { quantity, ...rest } = product;
    const newQty = quantity - 1;
    if (newQty > 0) {
      const updatedProduct = { quantity: newQty, ...rest };

      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((updatedData) => setProduct(updatedData));
    } else {
      setSoldOut("Sold Out");
    }
  };
  return (
    <Container className="my-5">
      <Row>
        <Col lg={6}>
          <img className="w-100" src={product.picture} alt="" />
        </Col>
        <Col lg={6}>
          <div>
            <h4 className="fw-bold mb-5">{product.name}</h4>
            <p>
              <span className="fw-bold">Product Id:</span> {product._id}
            </p>
            <p>
              <span className="fw-bold">Feature:</span> {product.about}
            </p>
            <p>
              <span className="fw-bold">Supplier:</span> {product.supplierName}
            </p>
            {soldOut ? (
              <p className="fw-bold text-success">{soldOut}</p>
            ) : (
              <p>
                <span className="fw-bold">Quantity:</span> {product.quantity}
              </p>
            )}
            <p className="fw-bold">${product.price}</p>
            <Button
              onClick={() => handleDelivered(product)}
              className="w-100 fw-bold mt-3"
              variant="warning"
            >
              Delivered
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProduct;
