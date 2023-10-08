import './Carrito.scss'

const Carrito = () => {
  return (
    <>    
    <h1>Productos en el carrito</h1>
    <table className="tabla-carrito">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
          <td>foto</td>
          <td>nombre</td>
          <td>cantidad</td>
          <td>precio</td>
          <td>acciones</td>
      </tbody>
    </table>
    </>
  )
}

export default Carrito