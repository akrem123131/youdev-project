import React, { Component } from 'react'
import akrem from './images/akrem.png'

import Hero from './Hero'
import Banner from './Banner';
import { Link } from "react-router-dom";

import {  FaCheck} from "react-icons/fa"
import Autre from "./Autre";

import './AboutUs.css'


export class AboutUs extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                    <Banner title="About Us">
                        <Link to="/" className="btn-primary">
                    Retour Accueil
                        </Link>
                    </Banner>
            </Hero>

<br/> <br/>

                <div>
                    <section className="maaxen-about-page section_70">>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="about-left">
                                    <h3>Buy or sell your house in few seconds with <span>Sublimmo</span>.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo                          consequat. Duis aute irure dolor in reprehenderit in volupt ate velit esse cillum dolore eu fugiat nulla pariatur. 			</p>
                                    
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-right margin-top">
                                    <img src={akrem} alt="Sublimmo" />
                                </div>
                            </div>


                        </div>
                    </div>

                    </section>

                    <br/><br/>

                    <section class="maaxen-different-area section_70">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="different-left">
                     <h3>Why are we different <span>from the others</span></h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt ate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                  </div>
               </div>
               
                        <div className="col-lg-6 col-sm-12">
                        <div class="choose-right">
                            <ul>
                                <li className="choose-list-1">
                                    <div className="single-choose-list">
                                        <div className="choose-icon">
                                            <FaCheck />

                                        </div>
                                        <div className="choose-text">
                                        <p>
                                            "lorem ipsum dolor sit amet consectetuer adzfjksfksd elitjhfkjshfskj"
                                        </p>
                                        </div>

                                    </div>
                                </li>
                                <li className="choose-list-2">
                                    <div className="single-choose-list">
                                        <div className="choose-icon">
                                        <FaCheck />

                                        </div>
                                        <div className="choose-text">
                                        <p>
                                            "lorem ipsum dolor sit amet consectetuer adzfjksfksd elitjhfkjshfskj"
                                        </p>
                                        </div>

                                    </div>
                                </li>
                                <li className="choose-list-3">
                                    <div className="single-choose-list">
                                        <div className="choose-icon">
                                        <FaCheck />

                                        </div>
                                        <div className="choose-text">
                                        <p>
                                            "lorem ipsum dolor sit amet consectetuer adzfjksfksd elitjhfkjshfskj"
                                        </p>
                                        </div>

                                    </div>
                                </li>
                                <li className="choose-list-4">
                                    <div className="single-choose-list">
                                        <div className="choose-icon">
                                        <FaCheck />

                                        </div>
                                        <div className="choose-text">
                                        <p>
                                            "lorem ipsum dolor sit amet consectetuer adzfjksfksd elitjhfkjshfskj"
                                        </p>
                                        </div>

                                    </div>
                                </li>
                                <li className="choose-list-5">
                                    <div className="single-choose-list">
                                        <div className="choose-icon">
                                        <FaCheck />
                                        </div>
                                        <div className="choose-text">
                                        <p>
                                            "lorem ipsum dolor sit amet consectetuer adzfjksfksd elitjhfkjshfskj"
                                        </p>
                                        </div>

                                    </div>
                                </li>
                                
                                
                            </ul>
                        </div>
                        </div>
            </div>
            </div>
         
      </section>
      <br/>
      <Autre />


                </div>
                </>
        )
    }
}

export default AboutUs
