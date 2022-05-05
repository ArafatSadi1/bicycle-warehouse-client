import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;