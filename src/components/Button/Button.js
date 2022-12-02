import PropTypes from 'prop-types';

import './Button.css';

function Button({ onClick, children }) {
  return (
    <button className='CommonButton' onClick={ onClick }>{ children }</button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
