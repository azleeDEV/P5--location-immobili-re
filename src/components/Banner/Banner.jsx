import React from "react";
import '../Banner/Banner.scss';

const Banner = ({ title, image }) => {
    return (
        <section className="head">
            <img src={image} alt="fond" />
             {title? <h1>{title}</h1> : null}
        </section>
    );
};

export default Banner;