import booksFantasy from "../Data/fantasy.json";
import { Card, Container, Row, Col } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="align-items-center">
        {booksFantasy.map((book, index) => (
          <Col className="col-4 my-4" key={book.asin}>
            <Card
              style={{ width: "18rem", height: "auto" }}
              className="text-center "
            >
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
