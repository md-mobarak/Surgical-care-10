import React from 'react';
import { Form } from 'react-bootstrap';

const Signup = () => {
    return (
        <div className='mx-auto w-25 mt-5'>

            <Form className='form'>
                <h1 className='login'>Sign Up</h1>
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
                <p>Already have an Account?
                    <button type="button" className="btn btn-link text-decoration-none">Please Login</button>
                </p>
                <button className='login-btn'>Sign Up</button>
                <button className=''>Google Sign In</button>
            </Form>
        </div>
    );
};

export default Signup;