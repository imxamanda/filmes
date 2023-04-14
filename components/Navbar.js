import React from 'react'
import Cabecalho from './cabecalho'
import Rodape from './Rodape'

const Navbar = (props) => {
  

  return (
    <>
    <Cabecalho/>
    <div className='bg-danger text-white py-3 text-center mb-3'>
    <h1>{props.titulo}</h1>
    </div>
    {props.children}
     <Rodape/>
    </>
  )
}

export default Navbar