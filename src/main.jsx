import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio.jsx'
import ALta from './pages/ALta'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ProductoProvider } from './contexts/ProductoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <ProductoProvider>
    <BrowserRouter>
      <Header />
        <Routes>
           <Route path="/alta" element={<ALta/>} />
           <Route path="/" element={<Inicio />} />
           <Route path="/nosotros" element={<Nosotros />} />
           <Route path="/contacto" element={<Contacto />} />
           <Route path="/carrito" element={<Carrito />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </ProductoProvider>
  </React.StrictMode>,
)
