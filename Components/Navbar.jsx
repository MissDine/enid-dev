import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import github from "../images/icons8-github-64.png"
import linkedin from "../images/icons8-linkedin-64.png"
import email from "../images/icons8-email-64.png"
import call from "../images/icons8-call-50.png"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Enid</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#github"><Image src={github} alt="" /></Nav.Link>
            <Nav.Link href="#github"><Image src={linkedin} alt="" /></Nav.Link>
            <Nav.Link href="#github"><Image src={email} alt="" /></Nav.Link>
            <Nav.Link href="#github"><Image src={call} alt="" /></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#about">About</Nav.Link>
            <Nav.Link eventKey={3} href="#services">Services</Nav.Link>
            <Nav.Link eventKey={4} href="#experience">Experience</Nav.Link>
            <Nav.Link eventKey={5} href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;