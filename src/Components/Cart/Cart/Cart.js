import { useContext } from 'react';
import styles from './Cart.module.css';
import { Modal } from '../../UI/Modal/Modal';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';
import { CartContext } from '../../../Context/CartContext/CartContext';

export const Cart = (props) => {
  const { totalAmount, items } = useContext(CartContext);
  const { showCartHandler } = useContext(ShowCartContext);
  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((el)=><li className={styles['items-summary']} key={el.id}>{el.name}</li>)}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={showCartHandler}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
