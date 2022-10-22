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
        <Navbar.Brand href="#home" style={{color:"black"}}>Enid</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#github"><Image src={github} alt=""/></Nav.Link>
            <Nav.Link href="#linkedin"><Image src={linkedin} alt="" /></Nav.Link>
            <Nav.Link href="#email"><Image src={email} alt="" /></Nav.Link>
            <Nav.Link href="#call"><Image src={call} alt="" style={{height:"30px",width:"30px"}}/></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home" style={{color:"black"}}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#about" style={{color:"black"}}>About</Nav.Link>
            <Nav.Link eventKey={3} href="#services" style={{color:"black"}}>Services</Nav.Link>
            <Nav.Link eventKey={4} href="#experience" style={{color:"black"}}>Experience</Nav.Link>
            <Nav.Link eventKey={5} href="#projects" style={{color:"black"}}>Projects</Nav.Link>
            <button><Nav.Link eventKey={2} href="#contact" style={{color:"black"}}>Contact Me</Nav.Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;