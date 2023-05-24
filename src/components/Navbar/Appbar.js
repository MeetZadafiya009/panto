import { Col, Container, Nav, Row } from "react-bootstrap";
import logo from './../../assets/images/Panto.png';
import cart from './../../assets/images/cart.png';
import number from './../../assets/images/number.png';
import './navbar.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Appbar() {
  return (
    <Navbar className="position-absolute w-100 appbar" expand="lg">
      <Container className="px-5 py-3" fluid>
        <Col sm={1}>
        <img src={logo} />
        </Col>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggle" />
        <Navbar.Collapse className="nav-collapse" id="navbarScroll">
          <Col lg={11} xs={12} className="d-flex">
          <Nav
            className="appnav mx-auto my-2 my-lg-0"
            
            navbarScroll
          >
            <Nav.Link className="app-link" href="#action1">Furniture</Nav.Link>
            <Nav.Link className="app-link" href="#action2">Shop</Nav.Link>
            <Nav.Link className="app-link" href="#action2">About Us</Nav.Link>
            <Nav.Link className="app-link" href="#action2">Contact</Nav.Link>
          </Nav>
          </Col>
          <Col className="cursor-pointer cart-wrapper flex-end" lg={1} >
              <div className="d-flex ">
                <img src={cart} />
                <div className="cart-number ">
                  <img src={number} />
                </div>
              </div>
            </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
