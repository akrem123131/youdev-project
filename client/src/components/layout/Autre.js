import React, { Component } from 'react'
import'./choose.css'

import akrem from './images/akrem.png'

import {  FaCheck} from "react-icons/fa"

export default class essay extends Component {
    render() {
        return (
            <div>

            
           <section className="a">
                <div className="container">
                    <div className="row">
                    <div class="col-md-6">
                  <div class="different-left">
                     <h3>Why choose us </h3>
                     
                  </div>
               </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div class="choose-left">
                            <img src={akrem} alt="Sublimmo" />
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
           </div>
        )
    }
}
