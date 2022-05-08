import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../images/banner2.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className="me-0">
      <Card className="border-0 rounded-0 p-0 text-white">
        <Card.Img className="w-100" src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <div className="ms-5 text-left">
              <h1 className="banner-title">Welcome to <span className="website-name">Bicycle Warehouse</span></h1>
              <h4 className="banner-text fw-semiBold">Live a healthier and more active lifestyle, all riders welcome!</h4>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
