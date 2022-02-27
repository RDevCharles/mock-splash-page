import NavBarHome from "./components/NavBarHome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

//settings page currently not being utilzed

const Settings = () => {
  return (
    <>
      <NavBarHome />
      <div style={{ textAlign: "left" }}>
        <ul>
          <Nav.Link style={{}} href="home">
            change address
          </Nav.Link>
          <Nav.Link style={{}} href="home">
            request a trade
          </Nav.Link>
          <Nav.Link style={{}} href="home">
            change plan
          </Nav.Link>
          <Nav.Link style={{}} href="report">
            report an issue
          </Nav.Link>
          <Nav.Link style={{}} href="report">
            cancel service
          </Nav.Link>
        </ul>
      </div>
    </>
  );
};

export default Settings;
