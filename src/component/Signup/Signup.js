import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

    }
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <p className='text-danger text-center'>Error:{error.message}</p>
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault()

        signInWithGoogle(email, password)

    }



    if (googleLoading) {
        return <h1 className='text-center'>Loading...</h1>;
    }
    if (user || googleUser) {
        navigate('/')
    }

    return (
        <div className='mx-auto w-25 mt-5'>

            <Form onSubmit={handleOnSubmit} className='form'>
                <h1 className='login'>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />

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

                <button onClick={handleGoogleSignIn} className='google-btn mt-2'> <img src={logo} alt="" width="25px" />Google Sign In</button>

                <p className='text-danger'>{googleError ? googleError.message : ""}</p>
            </Form>
        </div>
    );
};

export default Signup;