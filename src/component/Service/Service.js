import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, price, discription } = service;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className='service-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Service;