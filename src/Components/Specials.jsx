import especial1 from '../assets/gabriella-clare-marino-h7Bmptisp5o-unsplash.jpg';
import especial2 from '../assets/alex-belogub-pQzdireN2Lc-unsplash.jpg';
import especial3 from '../assets/peter-dawn-mM-L0yx5LcQ-unsplash.jpg';
import SpecialCard from './SpecialCard';
import './Specials.css';

const data = [
  {
    id: 1,
    title: 'Special 1',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 10,
    urlImage: especial1,
  },
  {
    id: 2,
    title: 'Special 2',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 10,
    urlImage: especial2,
  },
  {
    id: 3,
    title: 'Special 3',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 10,
    urlImage: especial3,
  },
];

const Specials = () => {
  return (
    <>
      <div className='specials-title'>
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <section className='specials'>
        {data.map(item => {
          return <SpecialCard key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Specials;
