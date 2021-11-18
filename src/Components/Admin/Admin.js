import React from 'react';
import { Container } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const Admin = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <Container className="mt-5 App">
                <h1>Welcome to Admin Panel</h1>
            </Container>
        </div>
    );
};

export default Admin;