import React from 'react';
import '../NotFound/NotFound.scss';
import { Link } from 'react-router-dom';
import image404 from "../../assets/404.svg"

const NotFound = () => {
    return (
        <div>
            <div className="page-404">
                <img src={image404} alt='Erreur 404'/>
                <p>Oups! La page que vous demandez n'existe pas..</p>
                <Link  to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
  }
  export default NotFound; 