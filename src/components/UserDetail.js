import React from 'react'
import { Container,Card,ListGroup,Image } from 'react-bootstrap'

const UserDetail = () => {
    return (
        <Container>
            <Image src='' alt='user Image' />
            <Card sm='12'>
            <Card.Title> Muhammad Zahid </Card.Title>
            <ListGroup>
             <ListGroup.Item>Email</ListGroup.Item>
             <ListGroup.Item>Address: </ListGroup.Item>
             <ListGroup.Item>Phone Number</ListGroup.Item>
             <ListGroup.Item>Farmer:</ListGroup.Item>
             <ListGroup.Item>Rank:</ListGroup.Item>
             <ListGroup.Item>Likes:</ListGroup.Item>
             </ListGroup>
            </Card>
        </Container>
    )
}

export default UserDetail
