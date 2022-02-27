// no usage yet
import NavBarHome from "../components/NavBarHome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ReportPage = () => {
  return (
    <>
      <NavBarHome />
      <div style={{ textAlign: "left" }}>
        <Form style={{ marginTop: "4rem" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color: "white", marginBottom: "2rem"}}>Give us a brief summary of your issue</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color: "white", marginBottom: "2rem"}}>Email</Form.Label>
            <Form.Control type="email" placeholder="email" />
            <Form.Text  className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color: "white", marginBottom: "2rem"}}>Wallet address</Form.Label>
            <Form.Control type="email" placeholder=" Must be an avalanche wallet" />
           

          </Form.Group>

          <Button style={{color: "white", marginTop: "2rem"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ReportPage;
