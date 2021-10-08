import { Container, Row, Col, Ratio, Button } from "react-bootstrap";

export function Portfolio() {
    return (
        <>
<h2 className="title1" id="portfolio">Para muestra, un botón...</h2>
<Col md={{ span: 6, offset: 3 }} className="text"><h5>Por privacidad y propiedad intelectual, no podemos mostraros la mayoría de nuestros trabajos al completo. Esto es solo un aperitivo para que veas lo que podemos hacer para dar vida a tus presentaciones y contenidos.</h5> </Col>
<Container className="box-portfolio">
  <Row className="border mb-3">
    <Col md="9">
    <Ratio aspectRatio="16x9">
  <iframe frameBorder="0" src="https://view.genial.ly/615f2d0a76a13f0ddfc9f657" type="text/html" allowFullScreen={true}/>
  </Ratio>
    </Col>
    <Col md={{ md: 3 }} className="text"><h6>A petición de un laboratorio, Lola nació como un personaje para contar la vida de una mujer con cáncer. Hicimos 8 vídeos secuencia que se integraron en una píldora eLearning. La experiencia fue magnífica. ¡Disfrutamos mucho con este proyecto!</h6> </Col>
  </Row>
</Container>

<Container className="box-portfolio">
  <Row className="border mb-3">
      <Col md="3" className="text"><h6>En este caso, nuestro cliente no quiso perder la oportunidad de causar una buena primera impresión con una presentación para el desarrollo de su aula virtual.</h6> </Col>
      
      <Col md="9">
    <Ratio aspectRatio="16x9">
  <iframe frameBorder="0" src="https://view.genial.ly/615f431ad7d9140df82525ae" type="text/html" allowFullScreen={true}/>
  </Ratio>
    </Col>
  </Row>
</Container>

<Container className="box-portfolio">
  <Row className="border mb-5 mt-3">
    <Col md="9">
    <Ratio aspectRatio="16x9">
  <iframe frameBorder="0" src="https://view.genial.ly/60adef7c2c8e220ddfbce9bd" type="text/html" allowFullScreen={true}/>
  </Ratio>
    </Col>
    <Col md={{ md: 3 }} className="text"><h6>Este escape room es una demo divertida para presentar un proyecto de tarjetas virtuales para programadores. Lo presentamos en nuestro bootcamp e hicimos participar al público, que iba respondiendo a cada pregunta y decidiendo su camino. ¿Serías capaz de escapar? </h6> </Col>
  </Row>
 <Row>
   <Col md="6">
   <Ratio aspectRatio="16x9" className="mb-3">
  <iframe frameBorder="0" src="https://view.genial.ly/615fe4df7d894d0dec25ba98" type="text/html" allowFullScreen={true}/>
  </Ratio>
     <h6>Extracto de una presentación para un curso de medicina.</h6>
   </Col>
   <Col md="6">
   <Ratio aspectRatio="16x9" className="mb-3">
  <iframe frameBorder="0" src="https://view.genial.ly/5ef352ff7ae2090d97c2c08a" type="text/html" allowFullScreen={true}/>
  </Ratio>Infografía para la presentación del estudio que redactamos y editamos para Asegre.
   </Col>
 </Row>

 <Row className="mb-5">
   <Col md="6">
   <Ratio aspectRatio="16x9" className="mb-3 mt-5">
  <iframe frameBorder="0" src="https://view.genial.ly/5e6c029a80c12e0fd16f4672" type="text/html" allowFullScreen={true}/>
  </Ratio>
     <h6>Muestra de un código de conducta online.</h6>
   </Col>
   <Col md="6">
   <Ratio aspectRatio="16x9" className="mb-3 mt-5">
  <iframe frameBorder="0" src="https://view.genial.ly/615f59ba50b1390de45b4647" type="text/html" allowFullScreen={true}/>
  </Ratio>Juego para niños que aboga por la sostenibilidad.
   </Col>
 </Row>
  {/* <div className="d-grid gap-2">
  <Button variant="secondary" size="lg">
    Block level button
  </Button>
</div> */}
</Container>
</>
)};