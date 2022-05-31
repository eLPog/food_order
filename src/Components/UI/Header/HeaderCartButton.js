import { useContext } from 'react';
import { CartIcon } from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';
import { CartContext } from '../../../Context/CartContext/CartContext';

export const HeaderCartButton = () => {
  const { items } = useContext(CartContext);
  const { showCartHandler } = useContext(ShowCartContext);
  return (
    <button className={styles.button} onClick={showCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{items.length}</span>

    </button>
  );
};
