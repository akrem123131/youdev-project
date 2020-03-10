
import React, { Component } from "react";
import Hero from "./Hero";
import Banner from './Banner';
import { Link } from "react-router-dom";
import Services from "./Services"
import Tendances from './Tendances';
//import './'




class Landing extends Component {
  render() {
    return (
      <>
       <Hero>
           <Banner 
                title="Découvrir Nos Agences " 
                subtitle="Deluxe Biens à Louer et à Vendre">
                <Link to="/Agences/" className="btn-primary">
                    Nos Agences
                </Link>
           </Banner>
        </Hero>
        <Tendances />
        <Services />
       
            
            
        </>
    );
  }
}
export default Landing;