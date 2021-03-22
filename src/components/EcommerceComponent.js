import React from 'react'
import { Card, Container } from 'react-bootstrap'

const EcommerceComponent = () => {
    return (
        <>
            
            <Card className='my-3 p-3 rounded'>
            <a href='/animal' > 
            <Card.Img src='' variant='top' alt='Animal Image'/>
            </a>
            <a href='/animal' > 
            <Card.Title  as= 'div' > 
            Animal Name
            </Card.Title>
            </a>
            <Card.Text as='div'>
           <div className='my-3 py-2'>
               Description:
               </div> 
            </Card.Text>
            <Card.Text as='h3'>
                Price:
            </Card.Text>
            </Card>

            
        </>
    )
}

export default EcommerceComponent
