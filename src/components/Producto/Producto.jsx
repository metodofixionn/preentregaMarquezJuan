import React from 'react'

const Producto = ({nombre,precio}) => {
  return (
    <div>
        <h3> Producto: {nombre} </h3>
        <p>Precio: {precio} </p>
        <button> Agregar </button>
    </div>
  )
}

export default Producto