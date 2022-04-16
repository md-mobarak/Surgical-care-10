import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password, { sendEmailVerification: true })
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='mx-auto w-25 mt-5'>

            <Form onSubmit={handleOnSubmit} className='form'>
                <h1 className='login'>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>

                <p>Already have an Account?
                    <button onClick={() => navigate('/login')} type="button" className="btn btn-link text-decoration-none">Please Login</button>
                </p>
                <button className='login-btn'>Sign Up</button>
                <button className='google-btn mt-2'> <img src={logo} alt="" width="25px" />Google Sign In</button>
                {/* <p>{error.message}</p> */}
            </Form>
        </div>
    );
};

export default Signup;