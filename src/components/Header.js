import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container,Form,Button,FormControl,Row,Col  } from 'react-bootstrap';
import { FaSignInAlt,FaShoppingCart  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiTalk } from "react-icons/gi";
const Header = () => {
    
    return (
        <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
    <LinkContainer to='/'>
      <Navbar.Brand> <GiTalk size='1.4rem' className='pr-1'/>CATTLETALK</Navbar.Brand>
    </LinkContainer>
      
    <Form >
      <Row>
        <Col >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" inline />
        </Col>
        <Col lg='2'>
      <Button variant="outline-success" className='' >Search</Button>
        </Col>
      </Row>
    </Form>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <LinkContainer to='/login'> 
      <Nav.Link ><FaSignInAlt size='1.2rem' className='pr-1'/>LogIn</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/profile'>
      <Nav.Link><CgProfile size='1.2rem' className='pr-1'/>Profile</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/ecommerce'>
      <Nav.Link >
        <FaShoppingCart size='1.2rem' className='pr-1 '/>Ecommerce
        </Nav.Link>
    </LinkContainer>
  </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
