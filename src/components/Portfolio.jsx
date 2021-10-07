import { Container, Row, Col } from "react-bootstrap";

export function Portfolio() {
    return (
    <Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>
)};