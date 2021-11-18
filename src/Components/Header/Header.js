import React, { useContext } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                            <Nav.Link ><Link to="/myOrders">Order</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/admin">Admin</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {loggedInUser.name || <Nav.Link ><Link to="/login">LogIn</Link></Nav.Link>}
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;