import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../shared/Footer/Footer";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <WhyUs></WhyUs>
        <Products></Products>
        <Footer></Footer>
    </div>
  );
};

export default Home;
