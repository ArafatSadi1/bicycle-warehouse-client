import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='mx-5'>
            <h2 className='my-3 text-center'>Our Stock</h2>
            <Row>
                {
                    products.slice(0, 6).map(product => <Product 
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </Row>
            <Link to='/manage' className='btn btn-warning d-block mx-auto mb-5 w-25 fw-bold'>Manage Inventories</Link>
        </div>
    );
};

export default Products;