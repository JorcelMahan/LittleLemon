import './Hero.css';
import heroImage from '../assets/eclairs-salmon-verduras-frescas-hierbas-snacks-gourmet.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservations');
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Little Lemon</h1>
        <span>Chicago</span>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button onClick={handleClick}>Reserve a table</button>
      </div>
      <div className='hero-image'>
        <img src={heroImage} alt='image' />
      </div>
    </div>
  );
};

export default Hero;
