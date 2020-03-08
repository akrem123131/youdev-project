import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title'
import "./style.css"

export default class Tendances extends Component {
    state={
        tendances:[
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
            <section className="tendances">
               <Title title="Tendances"/>
               <div className="tendances-center">
{this.state.tendances.map((item, index) => {
    return(
        <article key={index} className="tendances">
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