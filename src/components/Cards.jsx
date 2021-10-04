import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo from "../images/metrics-blue.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";


export function Cards() {
    
    return (
        <>
<h2 className="title1">¿Qué hacemos?</h2>
<Row xs={1} md={2} xl={3} className="row g-3" >
  {/* {Array.from({length: 3}).map((_, id) => ( */}
    {/* <Col> */}
      <Card className="card" >
        <Card.Img variant="top" src={logo} className="logo"/>
        <Card.Body>
          <Card.Title>Presentaciones</Card.Title>
          <Card.Text>
          Tu contenido cobrará vida y enganchará. Te ayudamos a contar tu historia, desde el concepto inicial hasta la animación final. ¡Será tu mejor carta de presentación!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card >
        <Card.Img variant="top" src={logo2} className="logo"/>
        <Card.Body>
          <Card.Title>Contenido Oh!</Card.Title>
          <Card.Text>
          Presentaciones, infografías, píldoras formativas, guías corporativas, memorias, post para redes sociales... Somos especialistas en crear contenido de calidad online y offline. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card >
        <Card.Img variant="top" src={logo3} className="logo"/>
        <Card.Body>
          <Card.Title>No hay proyecto pequeño...</Card.Title>
          <Card.Text>
        Todos son igual de importantes. Si tu audiencia es de dos o de mil personas, si solo necesitas un logo o una presentación. ¡Nos adaptamos a tus necesidades y presupuesto, te sorprenderás!
          </Card.Text>
        </Card.Body>
      </Card>
    {/* </Col> */}
  {/* ))} */}
</Row>
        </>
    )
}