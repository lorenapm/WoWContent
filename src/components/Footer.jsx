import React from "react";

export const Footer = () => {
    return (
<>
    <div className="text-center" bg="light" id="contacto">
      <div className="box-contact row mt-4 dark-grey-text" >
        <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>Oh! Presentaciones</strong></h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}}/>
          <p>¿Quieres saber más de nosotros? ¿Tienes alguna duda? ¿Quieres pedirnos un presupuesto sin ningún compromiso? O si simplemente charlar y comentarnos algo... ¡No dudes en contactarnos!</p>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>Links</strong></h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
          <p>
          <i className="fab fa-linkedin mr-3"></i> 
            <a className="dark-grey-text" href="https://www.linkedin.com/in/lorenaperezmartinez/" target="_blank"> OpenToWork</a>
          </p>
          <p>
          <i className="fab fa-github-square mr-7"></i> 
            <a className="dark-grey-text" href="https://github.com/lorenapm" target="_blank"> Front End Dev</a>
          </p>
          {/* <p>
            <i className="fas fa-home mr-3"></i>
            <a className="dark-grey-text" href="#hero"> Home</a>
          </p> */}
  
        </div>
  
        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>¿Hablamos?</strong></h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}}/>
          <p>
            <i className="fas fa-home mr-3"></i> Madrid, 28050, España</p>
          <p>
            <i className="fas fa-envelope mr-3"></i> lorena.perez@gmail.com</p>
          <p>
            <i className="fas fa-phone mr-3"></i> +34 654 534 539</p>
        </div>
      </div>
    </div>
  
    <div className="copyright-box bg-secondary text-center text-white py-3">
      © 2021 Oh! Presentaciones
    </div>
</>


    )};