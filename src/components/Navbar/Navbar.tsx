import React from "react";
import "./Navbar.css"
import {  NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (

        <nav>
            <picture>
                <source media="(max-width: 768px)" srcSet='../../assets/LOGO_mobile.png' />
                <img src='../../assets/LOGO.svg' alt="logo_site" />
            </picture>
           
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="about">A propos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;