import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/" end>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/projects">
        Projects
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;