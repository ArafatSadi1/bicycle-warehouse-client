import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row className="bg-dark p-5 w-100 m-0">
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Guest Service</h4>
        <Link className="text-decoration-none d-block text-start text-white" to="/account">Your Account</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/shipping">Shipping</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/return">Easy Returns</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/faq">Frequently Asked Questions</Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Guest Service</h4>
        <Link className="text-decoration-none d-block text-start text-white" to="/account">Your Account</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/shipping">Shipping</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/return">Easy Returns</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/faq">Frequently Asked Questions</Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Guest Service</h4>
        <Link className="text-decoration-none d-block text-start text-white" to="/account">Your Account</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/shipping">Shipping</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/return">Easy Returns</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/faq">Frequently Asked Questions</Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Guest Service</h4>
        <Link className="text-decoration-none d-block text-start text-white" to="/account">Your Account</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/shipping">Shipping</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/return">Easy Returns</Link>
        <Link className="text-decoration-none d-block text-start text-white" to="/faq">Frequently Asked Questions</Link>
      </Col>
    </Row>
  );
};

export default Footer;
