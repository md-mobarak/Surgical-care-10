import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { id, img, price, discription, name } = service;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p title={discription} class="card-text">{discription.slice(1, 50) + "..."}</p>
                    <p>Price:{price}</p>
                </div>
                <button onClick={() => navigate('/checkout')} className='service-btn'>Checkout</button>
            </div>
        </div>
    );
};

export default Service;