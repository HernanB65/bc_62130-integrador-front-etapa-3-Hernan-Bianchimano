import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <header>
              <h2>Copyright 2023 Weirdo_Tech - Todos los derechos reservados</h2>
      </header>
  
        <div className="weirdo-fish">
          <img src="public/img/Pez violeta.png" alt="pez violeta" />
        </div>
      
        <div className="button-group">
        <Link to="../pages/Nosotros.jsx" className="main-button">Quienes somos?</Link>
        </div>
  
        <div className="social-buttons">
          <div className="center-logos">
            <a href="https://www.facebook.com" className="facebook_button" target="_blank">
              <img src="public/img/Logo_Facebook.png" alt="Facebook" />Facebook</a>
            <a href="https://www.instagram.com" className="instagram_button" target="_blank">
              <img src="public/img/Logo_IG.png" alt="Instagram" />Instagram</a>
            <a href="https://www.twitter.com" className="twitter_button" target="_blank">
              <img src="public/img/Logo_Twitter.png" alt="Twitter" />Twitter</a>
          </div>
          <div className="right-logo">
            <a href="https://www.whatsapp.com" className="wapp_button" target="_blank">
              <img src="public/img/logo_wapp.png" alt="whatsapp" />Contactanos!</a>
          </div>
          
        </div>
  
      </footer>
  
  )
}

export default Footer