import { createContext, useEffect, useState } from "react";
import {del, get, post} from "../utils/http";


/* Creando CONTEXTO */
/* 1ero -> Creación del contexto */
const ProductoContext = createContext()

/* 2do -> El armado del Provider */
const url = 'http://localhost:8080/productos/'

const ProductoProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // Array vacío (se ejecuta solo una vez)


    const obtenerProductos = async () => {
        try {
            const products = await get(url)
            setProductos(products)
        } catch (error) {
            console.error(`ERROR obtenerProductos: ${error}`)
        }
    }

    const crearProductoContext = async (productoNuevo) => {
        try {
            const productoBackNuevo = await post(url, productoNuevo)
            setProductos([...productos, productoBackNuevo])
        } catch (error) {
            console.error(`Falló crearProductoContext`, error)
        }

    }

    const eliminarProductoContext = async (id) => {
        try {
            const productoEliminado = await del(url, id)
            console.log(productoEliminado) // {}
            const nuevaDB = productos.filter(producto => producto.id !== id)
            setProductos(nuevaDB)
        } catch (error) {
            console.error(`Algo salió mal en eliminarProductoContext`, error)
            
        }
    }

               const data = { productos, crearProductoContext, eliminarProductoContext }
    
    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}

/* 3ro -> Exportaciones */
export { ProductoProvider }

export default ProductoContext