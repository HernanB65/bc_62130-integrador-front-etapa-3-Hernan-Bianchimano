import { createContext } from "react";

const CarritoContext = createContext

const CarritoProvider = ( { children } ) => {

    const agregarCarritoContext = (producto) => {
        //agregarAlCarrito(producto)
    }
    
    const eliminarCarritoContext = (id) => {
        // eliminarDelCarrito(id)
    }
    
    const data = {agregarCarritoContext, eliminarCarritoContext}
    
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
    
export { CarritoProvider }

export default CarritoContext