import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='mx-5'>
            <h2 className='my-3 text-center'>Our Stock</h2>
            <Row>
                {
                    products.map(product => <Product 
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;