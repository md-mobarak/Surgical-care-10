import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const inputSubmit = () => {
        toast('Thank you For Booking');
    }

    const navigate = useNavigate()
    return (
        <div className='container'>
            <h1 className='text-center'>Address</h1>
            <form onClick={handleSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="" id="" required placeholder='Name' />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Email' required />
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" placeholder='Address' required />
                <label htmlFor="">Phone Number</label>
                <input type="number" name="" id="" placeholder='Number' required />
                <input onClick={inputSubmit} className='input-submit' type="submit" value="Submit" />
            </form>
            <ToastContainer />

            <button onClick={() => navigate(-1)} className='btn text-white ' style={{ backgroundColor: "#263082" }}>Back</button>

        </div>
    );
};

export default Checkout;