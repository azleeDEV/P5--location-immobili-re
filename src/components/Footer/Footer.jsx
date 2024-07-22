import React from "react";
import LogoFooter from "../../assets/LOGO-Footer.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="logo" />
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;