import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
import Swal from 'sweetalert2'


const Card = ({ producto }) => {
  const { agregarCarritoContext } = useContext(CarritoContext)
  
  const handleAgregarClick = () => {
    Swal.fire({
      title: 'Muy buena elección!!!',
      text: '¡Asegurá tu compra!!!',
      imageUrl: producto.foto, 
      validationMessage: producto.nombre,
      imageWidth: 120, // Tamaño personalizado de la imagen
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Agregar al carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        agregarCarritoContext(producto);
        Swal.fire('¡Agregado!', 'El producto ha sido agregado al carrito.', 'success');
      }
    })
  }
 
  
  return (
    <a className="card" href="#">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} 
          alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
          <button className='boton-agregar' onClick={() => handleAgregarClick(producto)}>Agregar</button>
        </div>
      </article>
    </a>
  )
}

export default Card
