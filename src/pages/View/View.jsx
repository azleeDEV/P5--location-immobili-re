import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DataBase from '../../api/logement.json';
import './View.scss';
import Slider from '../../components/Slider/Slider';
import Stars from '../../components/Stars/Stars';
import Collapse from '../../components/Collapse/Collapse';
import Tags from '../../components/Tags/Tags';

const View = () => {
    const { id } = useParams(); 
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = () => {
            const item = DataBase.find((element) => element.id === id);
            if (item) {
                setData(item);
            } else {
                navigate('/404');
            }
        };
        getItems();
    }, [id, navigate]);

    const nameSplit = data?.host.name.split(' ');

    return (
        <div>
            {data && (
                <div>
                    <div>
                        <Slider images={data.pictures} alt={data.title} />
                    </div>
                    <div className="view">
                        <div className="view-content">
                            <div className="view-infos">
                                <h1>{data.title}</h1>
                                <p>{data.location}</p>
                                <Tags tags={data.tags} />
                            </div>
                            <div className="view-host">
                                <div className="host-info">
                                    <div className="host-name">
                                        <span>{nameSplit?.[0]}</span>
                                        <span>{nameSplit?.[1]}</span>
                                    </div>
                                    <img src={data.host.picture} alt="image-host" />
                                </div>
                                <div className="host-stars">
                                    <Stars rating={data.rating} />
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <Collapse name='Description' elements={data.description} />
                            <Collapse name='Equipement' elements={data.equipments} />
                        </div>               
                    </div>        
                </div>
            )}
        </div>
    );
};

View.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape
    ({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape
    ({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};

export default View;