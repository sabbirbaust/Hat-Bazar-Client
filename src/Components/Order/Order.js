import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://protected-caverns-71960.herokuapp.com/myOrder?email='+loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])

    let sum = 0;
    const total = () => {
        for (let i = 0; i < order.length; i++) {
            let newPrice = order[i].price;
            sum += parseInt(newPrice);
        }
    }

    total();

    return (
        <div>
            {
                order.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
            <Header></Header>
            <Container className="mt-5">
                <h1>Your Orders</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Date ( Month/Day/Year )</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {
                        order.map(odr => <tbody><tr><td>{odr.name}</td><td>1</td><td>{odr.date}</td><td>{odr.time}</td><td>{odr.price}</td></tr></tbody>)
                    }
                    <tr>
                        <td colSpan="5"><h3>Total Price : {sum}</h3></td>
                    </tr>
                </Table>
            </Container>
        </div>
    );
};

export default Order;