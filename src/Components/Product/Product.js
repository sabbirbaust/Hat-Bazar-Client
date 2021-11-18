import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {name, price, imgURL} = props.product;

    const handleProduct = props.handleProduct;

    return (
        <div className="product">
            <img style={{width: '155px', height: '155px'}} src={imgURL} alt=""/>
            <h3>{name}</h3>
            <h3>{price} <FontAwesomeIcon icon={faDollarSign} /></h3>
            <Button onClick={() => handleProduct(props.product)} variant="success">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></Button>
        </div>
    );
};

export default Product;