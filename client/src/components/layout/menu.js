import React, { Component } from 'react'
import  {Nav,  Navbar, } from 'react-bootstrap'
import { FaUser, FaRegEnvelope, FaHeart } from "react-icons/fa"



export default class menu extends Component {
    render() {
        return (
            <Navbar fixedTop expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Sublimmo.tn</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  eventKey={1} href="/">Accueil</Nav.Link>
      <Nav.Link  eventKey={2} href="/location">Location</Nav.Link>
      <Nav.Link  eventKey={3} href="/achat">Achat</Nav.Link>
      <Nav.Link  eventKey={4} href="/agences">Nos Agences</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link eventKey={1} href="/admin"><FaUser /> Login</Nav.Link>
      <Nav.Link eventKey={1} href="/favoris"><FaHeart/> Mes favoris</Nav.Link>
      <Nav.Link eventKey={2} href="/Contact"><FaRegEnvelope /> Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
