import React from 'react';
import picture from '../../image/ripon.jpg'
const About = () => {
    return (
        <div>
            <h1 className='text-center'>About me</h1>
            <div className='container'>
                <div className='row container my-5 g-4'>
                    <div className='col-sm-12 col-md-6'>
                        <img className='img-fluid rounded-3' src={picture} alt="" />
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <h3 className='text-center my-3'>Mohammad Mobarak Hossen</h3>
                        <p> <h4 className=' d-inline me-2'>My Goal,</h4>
                            Everyone should have an aim in life.
                            It will help you to be preparing properly for the future.
                            My aim in life is to become an web-developer. I love the computer.
                            Specifically, I am interested to become a Web-developer who develops website and apps.
                            This is a very good profession nowadays.
                            Life without an aim or goal is like a ship without radar. So everyone should have an aim in life.
                            That will guide you properly to step ahead.
                            You have to study a lot and need to do hard work if you want to achieve something.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;