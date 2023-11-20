import React from 'react'
import './Contacto.scss'

const Contacto = () => {
  return (
    <>
    <h1>Contacto</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates corrupti eum non provident ex.</p>
 
   <form action="procesar_formulario.php" method="post" className="contact-form">
     <label htmlFor="nombre">Nombre:</label>
     <input type="text" id="nombre" name="nombre" required />
     
     <label htmlFor="email">Email:</label>
     <input type="email" id="email" name="email" required />
     
     <label htmlFor="mensaje">Mensaje:</label>
     <textarea id="mensaje" name="mensaje" required></textarea>
     
     <button type="submit">Enviar</button>
     <a href="https://hb-front-integrador-etapa-3.netlify.app/" className="back-button">Volver a página principal</a>
   </form>

     
   </>
   
  )
}

export default Contacto