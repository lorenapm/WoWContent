import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo from "../images/metrics-blue.png";
import data from "../data/data";

export function Cards({title, image, text, }) {
    return (
        <>
<h2 className="title1">¿Qué hacemos?</h2>
<Row xs={1} md={2} xl={3} className="row g-3" >
  {Array.from({length: 3}).map((data, id) => (
    <Col key={id}>
      <Card >
        <Card.Img variant="top" src={logo} className="logo"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </>
    )
}