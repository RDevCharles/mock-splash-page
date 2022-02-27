import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// navbar for dashboard usage
import Container from "react-bootstrap/Container";

const NavBarHome = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container style={{ borderBottom: "1px solid #d8d8d8", marginTop:'2rem' }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link style={{color:'black'}} href="home">
                Trades
              </Nav.Link>
               <Nav.Link style={{color:'black'}} href="">
                Education
              </Nav.Link>
              <Nav.Link style={{color:'black'}} href="">
                Vlog
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarHome;
