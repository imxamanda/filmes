import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {

 

  return (
    <>
    
    <h2 className='mt-3'>{props.titulo}</h2>
            <Row>
                {props.lista.map(item => (
                    <Col md={1} className='mb-3'>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                    </Col>
                ))}
            </Row>
    </>
  )
}


export default Galeria
