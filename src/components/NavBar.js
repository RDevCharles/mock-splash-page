//main navbar
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <div>
      <Navbar style={{width:'100%', borderBottom: '1px solid #d8d8d8'}} collapseOnSelect expand="lg" bg="transparent" variant="light" >
  <Container >
  <Navbar.Brand style={{color: 'black'}} href="/">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link style={{color: 'black'}} href="">About Us</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link style={{color: 'black'}} href="">Faq</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default NavBar;
