import React from 'react';

const NotFound = () => {
    const img = "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg?w=740"
    return (
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;