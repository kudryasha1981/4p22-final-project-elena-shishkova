import './Index.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { decrement } from '../../store/counter/counterSlice';
import { useDispatch } from 'react-redux';

function IndexPage() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <>
      <Button onClick={ () => dispatch(decrement()) }>Убавить</Button>
      <div className='Index-container'>

        {
          products.map((item, index) => {
            return <Card
              key={ index }
              title={ item.title }
              description={ item.description }
              id={ item.id }
              img={ item.image }
              price={ item.price }></Card>;
          })
        }
      </div>
    </>
  );
}

export default IndexPage;
