import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [increaseQty, setIncreaseQty] = useState(0);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const handleDelivered = async(product) => {
    const { quantity, ...rest } = product;
    const newQty = quantity - 1;
    if (newQty >= 0) {
      const updatedProduct = { quantity: newQty, ...rest };
      const url = `http://localhost:5000/product/${id}`;
      const {updatedData} = await axios.put(url, updatedProduct);
      setProduct(updatedData)
      toast('Delivery success')
    }
  };
  const getIncreaseQuantity = (event) => {
    setIncreaseQty(event.target.value);
    event.target.value = "";
  };
  const handleIncreaseQuantity = async() => {
    const { quantity, ...rest } = product;
    const newQty = parseInt(increaseQty) + quantity;
    const updatedProduct = { quantity: newQty, ...rest };
    const url = `https://whispering-crag-62697.herokuapp.com/product/${id}`;
    const {updatedData} = await axios.put(url, updatedProduct);
    setProduct(updatedData)
    toast('Update success')
};
  return (
    <Container className="mb-5 mt-0 p-3">
      <Row>
        <Col lg={6}>
          <img className="w-100 p-5" src={product?.picture} alt="" />
        </Col>
        <Col lg={6}>
          <div className="mt-5">
            <h4 className="fw-bold mb-3"> {product?.name}</h4>
            <p className="my-1">
              Product Id:
              <span className="fw-light"> {product?._id}</span>
            </p>
            <p className="my-1">
              Feature:
              <span className="fw-light"> {product?.about}</span>
            </p>
            <p className="my-1">Price: ${product?.price}</p>
            <p className="my-1">
              Supplier:
              <span className="fw-light"> {product?.supplierName}</span>
            </p>
            <p>
              Quantity: {product?.quantity}
            </p>
            <InputGroup className="mb-3 w-50">
              <h5>Restock the items</h5>
              <FormControl
                className="border border-success rounded px-2 w-50"
                placeholder="Number"
                onBlur={getIncreaseQuantity}
              />
              <Button onClick={handleIncreaseQuantity} variant="success">
                Add
              </Button>
            </InputGroup>

            {product?.quantity === 0 ? (
              <Button disabled className="w-100 fw-bold mt-3" variant="danger">
                Sold Out
              </Button>
            ) : (
              <Button
                onClick={() => handleDelivered(product)}
                className="w-100 fw-bold mt-3"
                variant="warning"
              >
                Delivered
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <div className="w-75 shadow-3 mx-auto my-5 p-3 rounded bg-dark">
        <Link
          to="/manage"
          className="btn btn-warning d-block mx-auto w-75 fw-bold"
        >
          Manage Products
        </Link>
      </div>
    </Container>
  );
};

export default UpdateProduct;
