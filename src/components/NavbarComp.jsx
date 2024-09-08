import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  Link,
  useLocation
} from "react-router-dom";

const NavbarComp = () => {
  let location = useLocation(); 

  return (
    <>
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary z-4">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link 
            className={`nav-link ms-xl-3 me-xl-4 ${location.pathname === "/" ? "active" : ""}`} as={Link} to="/">Home
            </Nav.Link>
            <Nav.Link className={`nav-link  ms-xl-3 me-xl-4 ${location.pathname === "/orders" ? "active" : ""}`} as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link className={`nav-link  ms-xl-3 me-xl-4 ${location.pathname === "/integrations" ? "active" : ""}`} as={Link} to="/integrations">Integrations</Nav.Link>
            <NavDropdown className='me-4' title="Tracking Page" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`nav-link  ms-xl-3 me-xl-4 ${location.pathname === "/partners" ? "active" : ""}`} as={Link} to="/partners" >
              Partner with Us
            </Nav.Link>
          </Nav>

          <Form className="d-flex justify-content-around">
          <div className="search-bar">
            <i className="fas fa-search search-icon"></i> 
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
          </div>

          <div className='d-flex'>
            <div className='after-search'>
              <i class="fa-regular fa-user"></i>
              <Nav.Link className={`nav-link ms-2 me-4 ${location.pathname === "/account" ? "active" : ""}`} as={Link} to="/" disabled>Account</Nav.Link>
            </div>

            <div className='after-search'>
              <i class="fa-solid fa-gear "></i>
              <Nav.Link className={`nav-link ms-2 me-4 ${location.pathname === "/setting" ? "active" : ""}`} as={Link} to="/" disabled>Setting</Nav.Link>
            </div>
          </div>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp
