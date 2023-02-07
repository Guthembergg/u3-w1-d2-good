import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand href="#home" className="text-white">
        Bar Narciso
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
