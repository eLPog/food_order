import { useContext } from 'react';
import styles from './Cart.module.css';
import { Modal } from '../../UI/Modal/Modal';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';

export const Cart = (props) => {
  const { showCartHandler } = useContext(ShowCartContext);
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{
        id: 213, name: 'Bób', amount: 3, price: 11.5,
      }].map((el)=><li key={el.id}>{el.name}</li>)}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>413.22</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={showCartHandler}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
