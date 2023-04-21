import Navbar from '@/components/Navbar'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


const Detalhes = ({filme, atores}) => {
   
    return (
        <Navbar titulo={filme.title}>

            <Row>
                <Col md={3}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.poster_path} />

                </Col>

                <Col md={9}>
                    <p><strong>💸 Orçamento: </strong>{filme.budget}</p>
                    <p><strong>🗓 </strong>{filme.release_date}</p>
                    <p><strong>⏱ </strong>{filme.runtime}min</p>
                    <div>
                        <strong>Gênero</strong>
                        <ul>
                        {filme.genres.map (item => (
                           <li>{item.name}</li> 
                           ))}
                        </ul>
                    </div>
                    <p><strong>⭐ Nota: </strong>{filme.vote_average}</p>
                    <p><strong>Sinopse: </strong>{filme.overview}</p>
                </Col>
            </Row>

            <h2>Elenco</h2>
            <Row>
            {atores.map (item => (
                <Col className='mb-3' md={2}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.profile_path} />
                </Col>
                           ))}
            </Row>


        </Navbar>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id
    const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
    const filme = resultado.data

    const resAtores= await apiFilmes.get('/movie/' + id + '/credits?language=pt-BR')
    const atores = resAtores.data.cast



    return {
        props: { filme, atores },
    }
}
