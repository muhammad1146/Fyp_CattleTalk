import React, { useState } from 'react'
import { Container,Row,Col,Nav,NavDropdown, FormControl,Button } from 'react-bootstrap'
import EcommerceComponent from './EcommerceComponent'
import SellerForm from './sellerForm'
import AnimalDetail from './AnimalDetail'
import Cattle from '../data/cattleForSale'
import '../App.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, BrowserRouter as Router, Switch,withRouter} from 'react-router-dom'

import { AiOutlineForm } from "react-icons/ai";
const Ecommerce = () => {
    const cities = ["Attock", "Rawalpindi", "Peshawar","Taxila"]
    const Type = ["Goat", "Cow","Sheep"]
    const [TypeState, setTypeState] = useState("Cow");
    const [CityState, setCityState] = useState("Attock");
    return (
        <>
        <h3>Ecommerce</h3>
        <Container className='border '>
            <Nav   variant="tabs"  defaultActiveKey='1' className='border px-3 bg-info'>
                <Nav.Item className='pt-3'>
                    <Nav.Link  eventKey='1'>All Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                <Nav.Link eventKey="2">
                    <NavDropdown  id="nav-dropdown" title="City" onChange={event =>{setCityState(event)}}>
                    { cities.map((e,i) => <NavDropdown.Item  eventkey={`2.${i}`} >{e}
                    </NavDropdown.Item>)}
                    </NavDropdown>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" >
                    <FormControl as='select'onChange={ event => { setTypeState(event.target.value)}}>
                       { Type.map(e=> <option>{e}</option> )}
                    </FormControl>
                    
                     </Nav.Link>
                </Nav.Item>
                <Nav.Item className='pt-3'>
                    <Nav.Link eventKey="4"  >
                   My Posts                    
                     </Nav.Link>
                </Nav.Item>
                
                
                <Nav.Item className='ml-auto'>
                    <LinkContainer to='/animals/sellform' >
                    <Button className='mt-1' variant='success'><AiOutlineForm size='1.2rem'/>Make Post</Button> 
                     </LinkContainer>
                </Nav.Item>
            </Nav>
            </Container>  
        <Container className='bg-secondary border rounded'>
        
     <Switch> 
            <Route path='/animals' component={()=>(<div className='contentSection'>
                <Row>
                    {Cattle.map(cattle =>(
                        <Col lg='3'>
                <EcommerceComponent cattle={cattle} />
                    </Col>
                    ))}
                </Row>
        </div>)} exact />
        <Route path='/animals/sellform' component={withRouter(SellerForm)}   />
        <Route path='/animals/:id' component={withRouter(AnimalDetail)}  />
    </Switch>
        
       
       
</Container>
</>
    )
}

export default Ecommerce
