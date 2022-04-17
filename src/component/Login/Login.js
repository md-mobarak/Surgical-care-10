import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const location = useLocation()
    const [password, setPassword] = useState()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (agree) {
            signInWithEmailAndPassword(email, password)
        }
    }


    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    if (loading) {
        return <div className='d-flex justify-content-center'>
            <h1>Loading...</h1>;
        </div>
    }




    return (
        <div className='mx-auto w-25 mt-5'>

            <Form onSubmit={handleOnSubmit} className='form'>
                <h1 className='login'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" re />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='mb-0'>New to Clinic?
                    <button onClick={() => navigate('/signup')} type="button" className="btn btn-link text-decoration-none">Please Sign up</button>
                </p>
                <p className='mb-0'>Forget Your Password?
                    <button onClick={() => navigate('/signup')} type="button" className="btn btn-link text-decoration-none">Please Reset</button>
                </p>
                <p className='text-danger'>{error ? 'wrong password' : ''}</p>

                <button className={!agree ? "login-btn-2" : "login-btn"}>Login</button>



            </Form>
        </div>
    );
};

export default Login;