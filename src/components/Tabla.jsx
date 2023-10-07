import { useContext } from 'react'
import './Tabla.scss'
import TablaFila from './TablaFila'
import ProductoContext from '../contexts/ProductoContext'

const Tabla = ({ setProductoAEditar }) => {
  const { productos } = useContext(ProductoContext)

  return (
    <table className="tabla-alta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Categoria</th>
          <th>Detalles</th>
          <th>Foto</th>
          <th>Envío</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productos && productos.map((producto, idx) => (
            <TablaFila key={idx} producto={producto} setProductoAEditar={setProductoAEditar} />
            ))         
        }
      </tbody>
    </table>
  )
}

export default Tabla