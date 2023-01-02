import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

const NavigationBar = () => {
    const [active, setActive] = useState("/");
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">Chun Ming Jimmy Man</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="me-auto"
                        activeKey={active}
                        onSelect={(selectedKey) => setActive(selectedKey)}
                    >
                        <Nav.Link href="/" eventKey="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/projects" eventKey="/projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="/about" eventKey="/about">
                            About
                        </Nav.Link>
                        <Nav.Link href="/contact" eventKey="/contact">
                            Contact me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
