import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


const Galeria = (props) => {

    const size = props.size || 2
    const link = props.link || '/filmes/'

    return (
        <>
            {
                props.titulo &&
                <h2 className='mt-3'>{props.titulo}</h2>
            }
            <Row>
                {props.lista.map(item => (
                    <Col className='mb-3' md={size}>
                        <Link href={ link + item.id}>
                            {
                                item[props.foto]
                                ?
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                                :
                                <Card.Img variant="top" src={"https://i.pinimg.com/736x/33/bb/b2/33bbb266307fc377f570c9ebe8c306f1.jpg"} />
                            }

                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}


export default Galeria
