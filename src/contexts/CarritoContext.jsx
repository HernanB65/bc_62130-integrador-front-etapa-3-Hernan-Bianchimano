import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";


const CarritoContext = createContext()

const url = 'https://bc-62130-integrador-etapa-3-h-b.onrender.com/api/carritos/'

const CarritoProvider = ( { children} ) => {
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length
    }
    
    function obtenerProductoDeCarrito(producto) {   
        return carrito.find(prod => prod.id === producto.id)
    }
    
    const agregarCarritoContext = (producto) => {

        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
           const productoDeCarrito = obtenerProductoDeCarrito(producto)
           console.log(productoDeCarrito)
           
           productoDeCarrito.cantidad++
           window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    
    }
    
    const eliminarCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async () => {
        try {
           const resultado = await post(url, carrito) 
           console.log(resultado)
           limpiarCarrito()

        } catch (error) {
            console.error(`Ocurrio un error en guardarCarritoContext()`, error)
        }
                
    }

    const data = {carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }

export default CarritoContext
