import Producto from "../Producto/Producto"

const ContenedorProductos = () => {
  return (
    <div>
        <Producto nombre="Jabon Liquido Verde" precio={1200} />
        <Producto nombre="Jabon Liquido Azul" precio={1100} />
        
    </div>
  )
}

export default ContenedorProductos