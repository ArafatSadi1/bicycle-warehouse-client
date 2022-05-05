import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='mx-5'>
            <h2 className='my-3 text-center'>Our Stock</h2>
            <Row>
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;