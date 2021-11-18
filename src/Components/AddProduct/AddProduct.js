import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const AddProduct = () => {

    const [imgUrl, setImgUrl] = useState();

    const handleSubmit = () => {
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const imgURL = imgUrl;
        const product = { name, price, imgURL };
        fetch('https://protected-caverns-71960.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'ec585676253f01bc8213ab2e0e8976e9');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
                alert('Image uploaded');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Add Product</h1>
                <Form>
                    <Form.Group controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="productPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" />
                    </Form.Group>

                    <Form>
                        <Form.Group controlId="productPhoto">
                            <Form.File onChange={handleImage} id="exampleFormControlFile1" label="Add Photo ( after adding photo wait until the pop-up message shown )" />
                        </Form.Group>
                    </Form>

                    <Button onClick={handleSubmit} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;