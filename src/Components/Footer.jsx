import { Link } from 'react-router-dom';
import logo from '../assets/Asset9@4x.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* logo  */}
      <div className='logo-footer'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      {/* doormat navigation  */}
      <nav>
        <Link to='/'>Home</Link>

        <Link to='/about'>About</Link>

        <Link to='/menu'>Menu</Link>

        <Link to='/reservations'>Reservations</Link>

        <Link to='/order'>Order Online</Link>

        <Link to='/login'>Login</Link>
      </nav>

      {/* contact */}
      <div className='contact'>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>

      {/* social media links */}
      <div className='social-media'>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
