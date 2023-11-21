import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ({ producto, setProductoAEditar }) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {

    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás a punto de eliminar este producto: `,
      icon: 'warning',
      imageUrl: producto.foto,
      imageWidth: 120,
      showCancelButton: true,
      confirmButtonColor: 'blueviolet',
      cancelButtonColor: '#bbb',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id)
        Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'error');
      }
    });
  }

  const handleUpdate = (producto) => {
        setProductoAEditar(producto)
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleUpdate(producto)}>Editar</button>
        <button onClick={() => handleDelete(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila