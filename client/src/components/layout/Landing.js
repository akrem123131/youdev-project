import React, { Component } from "react";
import Hero from "./Hero";
import Banner from './Banner';
import { Link } from "react-router-dom";
import Services from "./Services"
import Tendances from './Tendances';
import Autre from "./Autre";



class Landing extends Component {
  render() {
    return (
      <>
       <Hero>
           <Banner 
                title="luxueux Bien" 
                subtitle="deluxe Biens starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
           </Banner>
        </Hero>
        <Tendances />
        <Services />
        <Autre />
            
            
        </>
    );
  }
}
export default Landing;

