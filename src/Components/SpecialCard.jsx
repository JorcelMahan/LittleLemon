import './SpecialCard.css';

const SpecialCard = ({ urlImage, title, description, price }) => {
  return (
    <article className='card'>
      <img src={urlImage} alt='special' />
      <div className='card-header'>
        <h3>{title}</h3>
        <p>$ {price}</p>
      </div>
      <p className='card-body'>{description}</p>
    </article>
  );
};

export default SpecialCard;
