"use client";
import { Container, Nav,   NavItem, NavLink,  Navbar,  NavbarBrand, NavbarToggle } from "react-bootstrap";

export default function NavbarHeader() {
    return(
        <Navbar  expand="lg" className="shadow">
        <Container>
            <Navbar.Brand href="#" className="logo">CloApps</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto align-self-center navbar-collapse flex-fill d-lg-flex justify-content-lg-between  mx-lg-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about/index.html">About</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="/contactus/index.html">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>  
        </Container>
        </Navbar>
    )
}