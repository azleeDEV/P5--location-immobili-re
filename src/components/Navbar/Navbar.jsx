import React from "react";
import Logo from "../../assets/LOGO.svg";
import LogoMobile from "../../assets/LOGO-Mobile.svg";
import "./Navbar.scss"
import {  NavLink } from 'react-router-dom';
import '../../styles/style.scss'

const Navbar = () => {
    return (

        <nav>
            <picture>
                <source media="(max-width: 768px)" srcSet={LogoMobile} />
                <img src={Logo} alt="logo_site" />
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