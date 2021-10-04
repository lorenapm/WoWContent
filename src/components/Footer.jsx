import React from "react";
import { Container } from "react-bootstrap";


export const Footer = () => {
    return (
<Container className="page-footer font-small blue-grey lighten-5">

 
  <div className="container text-center text-md-left mt-5">

    
    <div className="row mt-3 dark-grey-text">

     
      <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Company name</h6>
        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}}/>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet adipisicing elit.</p>

      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

       
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
        <p>
          <a className="dark-grey-text" href="#!">MDBootstrap</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">MDWordPress</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">BrandFlow</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">Bootstrap Angular</a>
        </p>

      </div>
     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
        <p>
          <a className="dark-grey-text" href="#!">Your Account</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">Shipping Rates</a>
        </p>
        <p>
          <a className="dark-grey-text" href="#!">Help</a>
        </p>

      </div>
    
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}}/>
        <p>
          <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
 

    </div>
 

  </div>
 
  <div className="footer-copyright text-center text-black-50 py-3">© 2020 Oh! Presentaciones</div>
 

</Container>

    )};