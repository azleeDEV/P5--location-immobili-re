import React from 'react';
import './About.scss';
import Fond from '../../assets/fond_deux.png';
import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import { loremIpsum  } from 'react-lorem-ipsum';

const About = () => {
    return (
        <div>
            <Banner title="" image={Fond}></Banner>
            <div className="container-about">
                <Collapse name='Fiabilité' elements={loremIpsum({p: 3})}/>
                <Collapse name='Respect' elements={loremIpsum({p: 3})} />
                <Collapse name='Service' elements={loremIpsum({p: 3})} />
                <Collapse name='Sécurité' elements={loremIpsum({p: 3})} />
            </div>
        </div>
    );
  }
  export default About; 