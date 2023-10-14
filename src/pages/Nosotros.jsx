import { Link } from 'react-router-dom'
import './Nosotros.scss'

const Nosotros = () => {
  return (
    <>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, deleniti voluptates? Illum, nesciunt non. Sint quia magnam alias neque sit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quasi expedita deserunt!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae nemo ea laudantium asperiores temporibus praesentium unde dolorum ipsam commodi quae ratione soluta veritatis dicta fugit architecto, autem quidem quas alias fugiat voluptate explicabo? Voluptatem culpa placeat sunt tempora earum illo reiciendis quod minus, impedit ratione laboriosam exercitationem. Delectus, quo!</p>

  <Link to="../Nosotros.jsx" className="back-button-dos">Volver a pagina principal</Link>
  </>

  )
}

export default Nosotros