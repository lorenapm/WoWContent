import { Container, Row, Col, Ratio } from "react-bootstrap";

export function Portfolio() {
    return (
        <>
<h2 className="title1">Para muestra, un botón...</h2>

    <Container className="box-portfolio">
  <Row>
    <Col md="8">
    <Ratio aspectRatio="16x9">
  <iframe frameBorder="0" src="https://view.genial.ly/6159ab4c7deef00e1f33dbd9" type="text/html" allowFullScreen={true}/>
  </Ratio>
    
    </Col>
    <Col md={{ span: 4 }}>Second, but last</Col>
  </Row>
</Container>
</>
)};