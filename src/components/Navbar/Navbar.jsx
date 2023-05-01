import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Jogos</NavLink>
                <NavLink to="/tables">Tabelas</NavLink>
                <NavLink to="/infos">Informações</NavLink>
            </nav>
        </div>
    )
}

export default Navbar