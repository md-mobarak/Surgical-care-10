import React from 'react';

const NotFound = () => {
    const img = "https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg"
    return (
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <img className='rounded-3 img-fluid' src={img} alt="" />
        </div>
    );
};

export default NotFound;