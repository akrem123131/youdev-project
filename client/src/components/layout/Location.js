import React from 'react'
import Hero from './Hero'
import Banner from './Banner';
import { Link } from "react-router-dom";
import "./style.css"

export const Location = () => {
    return (
        <Hero hero="roomsHero">
        <Banner title="Location page">
            <Link to="/" className="btn-primary">
                Retour Accueil
            </Link>
       </Banner>


</Hero>
    )
}
 export default Location;