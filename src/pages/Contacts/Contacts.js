import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { increment, incrementByAmount } from '../../store/counter/counterSlice';
import './Contacts.css';

function ContactsPage() {
  const count = useSelector(({ counterReducer }) => counterReducer.counter);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increment());
  };
  return (
    <div className='HeadingContacts'>
      <h1>Счетчик { count }</h1>
      <Button onClick={ onClick }>Прибавить</Button>
      <Button onClick={ () => dispatch(incrementByAmount({ count: 10 })) }>Прибавить 10</Button>
    </div>

  );
}

export default ContactsPage;
