import booksFantasy from "../../public/Data/fantasy.json";
import { Card, Container, Row, Col } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {booksFantasy.map((book) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
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
