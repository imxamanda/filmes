import React from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiFilmes from '@/services/apiFilmes';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const atores = ({ atores }) => {

  return (
    <Navbar titulo="Atores">

      <Row md={4}>
        {atores.map(item => (
          <Col>
          <Card>
            <Card.Img src={"https://image.tmdb.org/t/p/original/" + item.profile_path} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <p>Popularidade: {item.popularity}</p>
              <Link className='btn btn-danger' href={'/atores/' + item.id}>Detalhes</Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Navbar>
  )
}

export default atores

export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get("/person/popular?language=pt-br")
  const atores = resultado.data.results
    
  return {
    props: {
      atores
    }, // will be passed to the page component as props
  }
}