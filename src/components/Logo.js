import React from 'react';
import Logo from '../assets/images/pic1.png';
import './Logo.css';


const logo = (props)=>(
    <div >
        <img className="Logo" src={Logo} alt="Logo"/>
    </div>
);



export default logo;