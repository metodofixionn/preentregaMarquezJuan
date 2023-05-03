import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>FDL Limpieza</h1>

        <nav>
            <ul>
                <li>Lavanderia</li>
                <li>Desengrasantes</li>
                <li>Desinfección</li>
                <li>Limpieza Gral</li>
            </ul>
        </nav>

        <CartWidget />


    </header>
  )
}

export default NavBar