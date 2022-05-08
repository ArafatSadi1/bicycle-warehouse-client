import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import thumbs from '../../images/WhyUs/thumbs.png';
import star from '../../images/WhyUs/star.png';
import heart from '../../images/WhyUs/heart.png';
import shipping from '../../images/WhyUs/shipping.png'

const WhyUs = () => {
  return (
    <Container className="border shadow rounded my-5 p-5">
      <h3 className="text-center mb-5 fw-bold">Enriching lives through more freedom, fitness, and fun!</h3>
      <Row className="align-items-center">
        <Col sm={12} lg={3} className="d-flex flex-column justify-content-center align-items-center">
          <img className="mb-3" width={60} src={thumbs} alt="" />
          <h4 className="text-center">Since 1992</h4>
          <p className="text-center lh-1">Our 30 years means you get the right advice.</p>
        </Col>
        <Col sm={12} lg={3} className="d-flex flex-column justify-content-center align-items-center">
          <img width={90} src={star} alt="" />
          <h4 className="text-center">1000s of 5-Star Reviews</h4>
          <p className="text-center">We always appreciate and value you.</p>
        </Col>
        <Col sm={12} lg={3} className="d-flex flex-column justify-content-center align-items-center">
          <img width={60} src={heart} alt="" />
          <h4 className="text-center">Love It Guarantee</h4>
          <p className="text-center">We have your back and will always make things right!</p>
        </Col>
        <Col sm={12} lg={3} className="d-flex flex-column justify-content-center align-items-center">
          <img width={100} src={shipping} alt="" />
          <h4 className="text-center">Free Shipping</h4>
          <p className="text-center">We save you money with free shipping on most orders over $5000</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
