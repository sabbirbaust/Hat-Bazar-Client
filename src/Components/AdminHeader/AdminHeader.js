import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const AdminHeader = () => {
    return (
        <div>
            <Container className="header mt-4">
                <div>
                    <h1>Hat-Bazar</h1>
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/addProduct">Add Product</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/manageProduct">Manage Product</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default AdminHeader;