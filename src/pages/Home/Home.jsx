import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Image from '../../assets/fond_un.png';
import DataBase from '../../api/logement.json';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" image={Image}></Banner>
            <div className="main-container">
                {DataBase.map((element, index) => {
                    return (
                    <Link className='card-link' to={`/view/${element.id}`} key={index}>
                        <Card title={element.title} image={element.cover} />
                    </Link>
                    );
                })}
            </div>
        </div>
    );
  }
  export default Home; 