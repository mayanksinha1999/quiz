import React from 'react';
import {Navbar,Row,Nav,Col} from 'react-bootstrap';
import Logo from './Logo';
import './Navigation.css';
import Timer from './Timer';


function Navigation(){
     return(
       <div>
        <Navbar bg="light" expand="lg">    
            <Logo/>    
              <Nav className="mr-auto">
              </Nav>
              <div className="right-container">
                  <Row>
                      <p className="navbar-font">Candidate Name: MAYANK SINHA</p>                   
                  </Row>
                  <Row>
                      <p className="navbar-font">Test Name: JEE MAINS MOCT TEST-1</p>                   
                  </Row>
                  <Row>
                      <p className="navbar-font">Remaining Time: <Timer/></p>                   
                  </Row>
              </div>              
        </Navbar>

     
        <Navbar bg="orange" expand="lg">
        <Nav className="mr-auto">
        </Nav>
            <Row>
              <Col>
                {/* <p>Hello World</p> */}
              </Col>
                <div className="right-container">
                 <Col>
                  {/* <p>Hello World 2</p> */}
              </Col>
            </div>   
            </Row>
        </Navbar>
        </div>
     );
}

export default Navigation;