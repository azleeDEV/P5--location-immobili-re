import React from "react";
import '../Banner/Banner.css';

const Banner = ({ title, image }) => {
    return (
        <section className="head">
            <img src={image} alt="fonds_un" />
             {title? <h1>{title}</h1> : null}
        </section>
    );
};

export default Banner;