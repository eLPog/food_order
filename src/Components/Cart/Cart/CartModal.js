import { useContext } from 'react';
import styles from './CartModal.module.css';
import { Modal } from '../../UI/Modal/Modal';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';
import { CartContext } from '../../../Context/CartContext/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const CartModal = (props) => {
  const {
    totalAmount, items, removeItem, addItem,
  } = useContext(CartContext);
  const { showCartHandler } = useContext(ShowCartContext);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>
          {totalAmount.toFixed(2)}
          {' $'}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={showCartHandler}>Close</button>
        {items.length > 0 && <button className={styles.button}>Order</button>}

      </div>
    </Modal>
  );
};
