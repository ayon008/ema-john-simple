import React from 'react';
import Css from './Product.css';

const Product = props => {
    console.log(props.product);
    const { name, img, seller, quantity } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;