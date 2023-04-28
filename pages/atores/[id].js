import Navbar from '@/components/Navbar'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Galeria from '@/components/Galeria'

const Detalhes = ({ ator, imagens, filmes, series }) => {
   
    return (

        <Navbar titulo={ator.name}>

            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>

                <Col md={9}>
                    <p><strong>🗓 Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>📌 Cidade Natal: </strong>{ator.place_of_birth}</p>
                    <p><strong>📖 Biografia: </strong>{ator.biography}</p>
                </Col>
            </Row>

            <Galeria lista={imagens} foto="file_path" size={1}/>
            <Galeria titulo="Filmes que participo:" lista={filmes} foto="poster_path" />
            <Galeria titulo="Produções de TV que participou:" lista={series} foto="poster_path" />

          

        

        </Navbar>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-br')
    const ator = resultado.data

    const resImagens = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImagens.data.profiles

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resSeries = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
    const series = resSeries.data.cast

    return {
        props: { ator, imagens, filmes, series },
    }
}