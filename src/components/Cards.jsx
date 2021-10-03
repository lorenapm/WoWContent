import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo from "../images/metrics-blue.png";

export function Cards() {

   

    return (
        <>
<h2 className="title1">¿Qué hacemos?</h2>
<Row xs={1} md={2} xl={3} className="row g-3" >
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col key={idx}>
      <Card >
        <Card.Img variant="top" src={logo} className="logo"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </>
    )
}