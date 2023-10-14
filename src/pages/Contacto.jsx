import React from 'react'
import './Contacto.scss'

const Contacto = () => {
  return (
    <>
    <h1>Contacto</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates corrupti eum non provident ex.</p>
 
   <form action="procesar_formulario.php" method="post" class="contact-form">
     <label for="nombre">Nombre:</label>
     <input type="text" id="nombre" name="nombre" required />
     
     <label for="email">Email:</label>
     <input type="email" id="email" name="email" required />
     
     <label for="mensaje">Mensaje:</label>
     <textarea id="mensaje" name="mensaje" required></textarea>
     
     <button type="submit">Enviar</button>
     <a href="/index.html" class="back-button">Volver a página principal</a>
   </form>

   <hr />

   <hr />
   
   </>
   
  )
}

export default Contacto