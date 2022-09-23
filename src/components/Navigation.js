import React from 'react'
import './Navigation.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

  return (
    <div>
    <Navbar expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#" className='logoname'><img src="Logo.PNG" alt="logo" className='logo' /><b>Cheetah</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><h6 style={{color:'black'}}>MEN</h6></Nav.Link>
            <Nav.Link href="#action2"><h6 style={{color:'black'}}>WOMEN</h6></Nav.Link>
            <Nav.Link href="#action4"><h6 style={{color:'black'}}>STUDIO<span style={{color:'red'}}><sup><b>NEW</b></sup></span></h6></Nav.Link>
            <NavDropdown title="BEAUTY" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><h6 style={{color:'rgb(230, 94, 116)'}}>HOME & LIVING</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <h6 style={{color:'rgb(230, 94, 116)'}}>MAKEUP</h6>
                <div className="makeup"></div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <h6 style={{color:'rgb(230, 94, 116)'}}>EXPLORE MORE</h6>
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation