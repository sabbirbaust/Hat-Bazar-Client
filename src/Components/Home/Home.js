import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ProductContext } from '../../App';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://protected-caverns-71960.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    },[])

    const history = useHistory();

    const [selectedproduct, setSelectedProduct] = useContext(ProductContext);

    const handleProduct = (prd) => {
        setSelectedProduct(prd);
        history.push('/checkOut');
    }

    return (
        <div>
            {
                products.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
            <Header></Header>
            <Container className="mt-5 homeContainer">
                {products.map(product => <Product product={product} 
                handleProduct={handleProduct}
                ></Product>)}
            </Container>
        </div>
    );
};

export default Home;