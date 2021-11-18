import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ProductContext, UserContext } from '../../App';
import Header from '../Header/Header';

const Checkout = () => {

    const [selectedProduct, setSelectedProduct] = useContext(ProductContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();

    const handleOrder = () => {
        history.push('/myOrders');
        const email = loggedInUser.email;
        const name = selectedProduct.name;
        const price = selectedProduct.price;
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        const product = { name, price, email, date, time };
        fetch('https://protected-caverns-71960.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
    }


return (
    <div>
        <Header></Header>
        <Container className="mt-5">
            <h1>Checkout</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedProduct.name}</td>
                        <td>1</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Total Price : {selectedProduct.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleOrder} variant="success">Checkout</Button>
        </Container>
    </div>
);
};

export default Checkout;