import React from 'react';
import resume from '../../assets/Mahmudur Rahman Salman.pdf';
import './Header.css'; 

const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={resume} download>Download Resume</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
            
        </div>
    );
};

export default CTA;