import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container fluid className="bg-secondary text-white ">
        <Row className="d-flex justify-content-center">
          <Col className="text-center">Copyright 2023</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
