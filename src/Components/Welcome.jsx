import { Jumbotron, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron fluid>
      <Container className=" text-center ">
        <h1>Bar Narciso</h1>
        <p>You are welcome to get drunk on your favourite cocktails!</p>
      </Container>
    </Jumbotron>
  );
};

export default Welcome;
