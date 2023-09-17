import React, { useEffect, useState } from 'react';
import Css from './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summaty</h4>
            </div>
        </div>
    );
};

export default Shop;