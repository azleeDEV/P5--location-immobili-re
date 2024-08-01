import React from 'react';
import './Tags.scss';

const Tags = ({tags}) => {
    return (
        <div>
             <div className="view-tag">
                {tags.map((tag, index) => (
                    <button key={index}>{tag}</button>
                ))}
            </div>
        </div>
    );
};


export default Tags;