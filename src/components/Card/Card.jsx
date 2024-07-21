import React from "react";
import '../Card/Card.css';

const Card = ({ title, image }) => {
    return (
        <div className="card">
           <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export default Card;