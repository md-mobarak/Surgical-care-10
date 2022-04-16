import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='mx-auto w-25 mt-5'>

            <Form className='form'>
                <h1 className='login'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>New to Clinic?
                    <button onClick={() => navigate('/signup')} type="button" className="btn btn-link text-decoration-none">Please Sign up</button>
                </p>
                <button className='login-btn'>Login</button>

            </Form>
        </div>
    );
};

export default Login;