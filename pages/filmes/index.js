import apiDeputados from '@/services/apiDeputados'
import React, { useEffect, useState} from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiFilmes from '@/services/apiFilmes';


const index = (props) => {
   
      
  return (
    <Navbar titulo="FILMES">
        {props.filmes.map(item =>(
            <p>{item.title}</p>
        ))}
    </Navbar>
  )
         }

export default index

export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results
    //console.log(resultado.data.results)

    return {
      props: { filmes }, 
    }
  }