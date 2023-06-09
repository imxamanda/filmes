import React from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiFilmes from '@/services/apiFilmes';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const index = ({filmes}) => {

    return (
        <Navbar titulo="Filmes Lançamentos">

            <Row md={4}>
                {filmes.map(item => (
                    <Col key={item.id}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link href={'/filmes/' + item.id} className='btn btn-danger'>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Navbar>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/upcoming?language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: {filmes}, // will be passed to the page component as props
    }
}