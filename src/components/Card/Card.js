import './Card.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basketSlice';

function Card({ img, title, description, price, id, onClick = () => {} }) {

  const dispatch = useDispatch();

  return (
    <Link to={ `products/${ id }` } className='Card' onClick={ () => onClick(title) }>
      <img className='Card-img' src={ img } alt=''></img>
      <div className='Card-container'>
        <h2 className='Card-title common-header'>{ title }</h2>
        <p className='Card-description'>{ description }</p>
        <div className='Card-price common-price'>{ price }</div>
        <div className='Card-button'>
          <Button onClick={ () => dispatch(addToBasket(id)) }>Купить</Button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
