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
                <Collapse name='Fiabilité' elements="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse name='Respect' elements="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse name='Service' elements="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
                <Collapse name='Sécurité' elements="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés, Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
Kosa" />
            </div>
        </div>
    );
  }
  export default About; 