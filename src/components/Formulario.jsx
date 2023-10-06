import React, { useContext, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoría: '',
  detalles: '',
  foto: '',
  envío: false
}

const Formulario = () => {
  const [form, setForm] = useState(formInicial)
  const { crearProductoContext } = useContext(ProductoContext)

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  } 
    
  const handleSubmit = async (e) => {
    e.preventDefault() 
    
    await crearProductoContext(form)
    
  }

  const handleReset = () => {

  }
  
  return (
    <>
      <h3>Agregar : Editar</h3>

      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lbl-categoría">Categoría</label>
          <input type="text" name="categoría" id="lbl-categoría" value={form.categoria} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange ={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lbl-envío">Envío</label>
          <input type="checkbox" name="envío" id="lbl-envío" checked={form.envío} onChange={handleChange}  />
        </div>
        <button type="submit">Guardar</button>
        <button type="reset" onClick={handleReset}>Limpiar</button>
         
      </form>
    </>
  )
}

export default Formulario