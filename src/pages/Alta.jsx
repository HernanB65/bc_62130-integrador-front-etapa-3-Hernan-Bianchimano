import React from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'

const Alta = () => {
  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <h2>Agregar producto</h2>
      <Formulario />
      <hr />
      <Tabla />
    </>
  )
}

export default Alta