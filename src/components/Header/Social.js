import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const Social = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mahmudur-rahman-salman/" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/Mahmudur-Rahman-Salman" target="_blank"><BsGithub></BsGithub></a>
         </div>
    );
};

export default Social;