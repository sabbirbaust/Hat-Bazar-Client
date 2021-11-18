import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Spinner } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const ManageProduct = () => {

    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        fetch('https://protected-caverns-71960.herokuapp.com/manageProduct')
            .then(response => response.json())
            .then(data => setManageProduct(data));
    }, [])

    function deleteProduct(id) {
        fetch(`https://protected-caverns-71960.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            {
                manageProduct.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Manage Products</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        manageProduct.map(odr => <tbody><tr><td>{odr.name}</td><td>{odr.price}</td><td><Button onClick={() =>deleteProduct(odr._id)} variant="danger">Delete</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default ManageProduct;