import React from 'react';
import './Footer.css'

const Footer = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className='w-100 footer-section row'>
            <h5 className='text-white text-center'>Contact Us</h5>
            <p className='text-white text-center'>&copy;{date} All Right Reserved</p>
        </div>
    );
};

export default Footer;