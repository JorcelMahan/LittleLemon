import logo from '../assets/Asset14@4x.png';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      {/* if the route is equal to the URL set a background color of active */}
      <nav>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>

        <Link to='/' className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>

        <Link to='/' className={location.pathname === '/menu' ? 'active' : ''}>
          Menu
        </Link>

        <Link
          to='/reservations'
          className={location.pathname === '/reservations' ? 'active' : ''}
        >
          Reservations
        </Link>

        <Link to='/' className={location.pathname === '/order' ? 'active' : ''}>
          Order Online
        </Link>

        <Link to='/' className={location.pathname === '/login' ? 'active' : ''}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
