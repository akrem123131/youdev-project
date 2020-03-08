
import React from 'react'
import "./Footer.css"
import { FaFacebook,FaGooglePlus } from "react-icons/fa"
export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>Sublimmo.tn</h4>
                    <ul className="list-unstyled">
                        <li><b>A propos de Sublimmo</b></li>
                        <li>Qui Sommes-nous</li>
                        <li>Nos Agences</li>
                    </ul>
                </div>

                {/* Column2 */}
                <div className="col">
                    <h4>Service Client</h4>
                    <ul className="list-unstyled">
                        <li>FAQ</li>
                        <li>Contacter-Nous  <FaFacebook /> <FaGooglePlus /></li>
                        
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>Termes</h4>
                    <ul className="list-unstyled">
                        <li>Plan du Site</li>
                        <li>Informations légales</li>
                        <li>Politique de protection des données</li>
                        <li>Politique de cookies</li>
                    </ul>
                </div>
            </div>

<hr />
                <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Sublimmo.inc | All right reserved 

                </p>

                </div>
        </div>
        </div>
    )
}
