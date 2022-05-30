import { useContext } from 'react';
import { CartIcon } from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';

export const HeaderCartButton = () => {
  const { showCartHandler } = useContext(ShowCartContext);
  return (
    <button className={styles.button} onClick={showCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>

    </button>
  );
};
