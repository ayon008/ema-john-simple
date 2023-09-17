import React from 'react';
import Css from './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = props => {
    const { name, img, seller, quantity, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price  : {price}$</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart' onClick={props.eventHandler}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;