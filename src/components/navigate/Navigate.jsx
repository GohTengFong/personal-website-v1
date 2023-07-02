import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigate.css';

const Navigate = () => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={{ fontFamily: "JBMono" }} className="nav-name">{"</Teng Fong>"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="nav-about">About</Nav.Link>
                    <Nav.Link href="#skills" className="nav-skills">Skills</Nav.Link>
                    <Nav.Link href="#projects" className="nav-projects">Projects</Nav.Link>
                    <Nav.Link href="#leetcode" className="nav-leetcode">LeetCode</Nav.Link>
                    {/* <Nav.Link href="#contact" className="nav-contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigate