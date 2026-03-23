import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar-brand'>My App</div>
    <div className='navbar-links'>
      <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to='/profile' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Profile
      </NavLink>
      <NavLink to='/signup' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Signup
      </NavLink>
      <NavLink to='/success' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Success
      </NavLink>
    </div>
  </nav>
)

export default Navbar

