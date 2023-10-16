import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <header>
              <h2>Copyright 2023 Weirdo_Tech - Todos los derechos reservados</h2>
      </header>
  
        <div className="weirdo-fish">
          <img src="img/Pez violeta.png" alt="pez violeta" />
        </div>
      
        <div className="button-group">
        <Link to="#" className="main-button">Quienes somos?</Link>
        </div>
  
        <div className="social-buttons">
          <div className="center-logos">
            <Link to="https://www.facebook.com" className="facebook_button" target="_blank">
              <img src="img/Logo_Facebook.png" alt="Facebook" />Facebook</Link>
            <Link to="https://www.instagram.com" className="instagram_button" target="_blank">
              <img src="img/Logo_IG.png" alt="Instagram" />Instagram</Link>
            <Link to="https://www.twitter.com" className="twitter_button" target="_blank">
              <img src="img/Logo_Twitter.png" alt="Twitter" />Twitter</Link>
          </div>
          <div className="right-logo">
            <Link to="https://www.whatsapp.com" className="wapp_button" target="_blank">
              <img src="img/Logo_wapp.png" alt="whatsapp" />Contactanos!</Link>
          </div>
          
          
        </div>
  
      </footer>
  
  )
}

export default Footer