import Navbar from '@/components/Navbar'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'


const Detalhes = ({filme}) => {
   
    return (
        <Navbar titulo={filme.title}>
            <div>Detalhes</div>
        </Navbar>
    )
}

export default Detalhes

export async function getServerSideProps(context) {
    const id = context.params.id
    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data

    return {
        props: { filme },
    }
}
