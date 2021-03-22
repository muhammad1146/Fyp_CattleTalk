import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import EcommerceComponent from './EcommerceComponent'
const Ecommerce = () => {
    return (
        <Container fluid>
        <h3>
                          Ecommerce Component
            </h3>  
        <div className='contentSection'>
            
                <Row>
                   <Col lg='4'>
                <EcommerceComponent />
                    </Col>
                </Row>
            
        </div>
               </Container>
    )
}

export default Ecommerce
