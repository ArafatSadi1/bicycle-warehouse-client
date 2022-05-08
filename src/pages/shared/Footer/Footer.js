import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row className="bg-dark p-5 w-100 m-0">
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Guest Service</h4>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/account"
        >
          Your Account
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/shipping"
        >
          Shipping
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/return"
        >
          Easy Returns
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/faq"
        >
          Frequently Asked Questions
        </Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Learn More</h4>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/account"
        >
          Store Locations
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/shipping"
        >
          Ready to Ride Center
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/return"
        >
          About Us
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/faq"
        >
          Hiring/Careers
        </Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Programs</h4>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/account"
        >
          Events
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/shipping"
        >
          Free Financing
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/return"
        >
          Refer a Friend, Get $10
        </Link>
        <Link
          className="text-decoration-none d-block text-start text-white"
          to="/faq"
        >
          Ride Africa Project
        </Link>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h4 className="text-white text-start">Lets Talk Bikes & Gear</h4>
        <h5 className="text-white text-start">Contact us: Online Chat,</h5>
        <Link className=" d-block text-start text-white" to="/account">
          Info@BicycleWarehouse.com
        </Link>
        <Link className=" d-block text-start text-white" to="/account">
          Stores
        </Link>
      </Col>
    </Row>
  );
};

export default Footer;
