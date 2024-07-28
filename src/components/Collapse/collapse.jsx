import React, {  useState } from 'react';
import './Collapse.scss';


const Collapse = ({ name, elements }) => {
    const [active, setActive] = useState(false);
    
    const toggleCollapsible = () => {
        setActive(!active);
    };

    return (
        <div className="collapse">
            <div className="btn">
                <button className={`collapsible ${active ? 'active' : 'desactive'}`} onClick={toggleCollapsible}>
                    {name}
                    <img src={require('../../assets/arrow_down.png')} alt="aaa" />
                </button>
                <div className={`content ${active ? 'active' : ''}`}>
               
                    {typeof elements === 'string' ? (
                        <div>{elements}</div>
                    ) : (
                        elements.map((element, index) => (
                            <div key={index}>{element}</div>
                        ))
                    )}
               
                </div>
            </div>
        </div>
    );
};

export default Collapse;