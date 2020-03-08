import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title'
import "./style.css"

export default class Services extends Component {
        state={
            services:[
                {
                    icon:<FaCocktail/>,
                    title:"free cocktails",
                    info: "lorem ipsum in dthe house of godzilla queen motherfucker from the hell to heaven so we can go"
                },
                {
                    icon:<FaHiking/>,
                    title:"Endless hicking",
                    info: "lorem ipsum in dthe house of godzilla queen motherfucker from the hell to heaven so we can go"
                },
                {
                    icon:<FaShuttleVan/>,
                    title:"free shuttle",
                    info: "lorem ipsum in dthe house of godzilla queen motherfucker from the hell to heaven so we can go"
                },
                {
                    icon:<FaBeer/>,
                    title:"free beer",
                    info: "lorem ipsum in dthe house of godzilla queen motherfucker from the hell to heaven so we can go"
                }
            ]
        }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
{this.state.services.map((item, index) => {
    return(
        <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
        </article>

    );
})}
               </div>
            </section>
        );
    }
}
