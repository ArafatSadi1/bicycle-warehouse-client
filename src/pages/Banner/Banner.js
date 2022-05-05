import React from "react";
import { Button, Card } from "react-bootstrap";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="row me-0">
      <Card className="border-0 rounded-0 p-0 text-white col-lg-12 col-sm-12">
        <Card.Img className="h-100 w-100" src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <div className="ms-5 mt-5 text-left">
              <h1 className="">Welcome to <span>Bicycle Warehouse</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, illum?</p>
          <Button variant="dark">See The Bikes</Button>
          </div>
          {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
