import React from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiFilmes from '@/services/apiFilmes';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const index = (props) => {


  return (
    <Navbar titulo="Atores">

      <Row md={4}>
        {props.atores.map(item => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Link className='btn btn-danger' href={'/atores/' + item.id}>Detalhes</Link>
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
  const resultado = await apiFilmes.get('/person/popular')
  const atores = resultado.data.results
  //console.log(resultado.data.results)

  return {
    props: { atores },
  }
}