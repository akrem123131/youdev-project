import React, { Component } from 'react'
import Hero from './Hero'
import Banner from './Banner';
import { Link } from "react-router-dom";
import { FaFacebook,FaGooglePlus } from "react-icons/fa"
import './Contact.css'



import "./style.css"

export class Contact extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                    <Banner title="Contact Us">
                        <Link to="/" className="btn-primary">
                    Retour Accueil
                        </Link>
                    </Banner>
            </Hero>

<br/> <br/>

<div className="b">



            <section className="maaxen-contact-page-area section_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-7">
                            <div className="contact-page-left">
                                <h3>"get in touch</h3>
                                <form>
                                    <p>
                                        <input type="text" placeholder="Your Name"/>
                                    </p>
                                    <p>
                                        <input type="email" placeholder="Email Address"/>
                                    </p>
                                    <p>
                                        <input type="text" placeholder="Subject"/>
                                    </p>
                                    <p>
                                        <textarea placeholder="Your Question..."></textarea>
                                    </p>
                                    <p>
                                        <button type="submit">Send Message</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-5"></div>
                        <div className="contact-page-right">
                            <div className="contact-page-widget">
                                <h4>
                                    "Follow Us"
                                </h4>
                                <ul>
                                    <li>
                                       
                                           <FaFacebook />
                                        
                                    </li>
                                    <li>
                                            <FaGooglePlus />
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-page-widget">
                            <h4>
                                    "Get Support"
                                </h4>
                                <ul className="contact-address">
                                    <li>                                 
                                         <span> Address :</span>
                                         "Sousse, Tunisia, 4000"
                                    
                                    </li>
                                    <li>
                                          <span>Email :</span>
                                          "akrempro96@gmail.com"
                                    </li>
                                    <li>
                                          <span>Phone :</span>
                                          "+21624146849"
                                    </li>
                                    <li>
                                          <span>Web :</span>
                                          "www.example.com"
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            </div>
    
    </>
        )
    }
}

export default Contact
