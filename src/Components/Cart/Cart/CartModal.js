import { useContext, useState } from 'react';
import styles from './CartModal.module.css';
import { Modal } from '../../UI/Modal/Modal';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';
import { CartContext } from '../../../Context/CartContext/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout/Checkout';

export const CartModal = (props) => {
  const [showSummary, setShowSummary] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
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

  const showSummaryHandler = () => {
    showSummary ? setShowSummary(false) : setShowSummary(true);
  };
  const showThanksHandler = () => {
    showThanks ? setShowThanks(false) : setShowThanks(true);
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
    <>
      {showSummary ? (
        <Modal>
          {' '}
          <div className={styles.actions}>
            {showThanks ? (
              <div className={styles.actions}>
                <span className={styles.info}>Thank you! We start preparing the order</span>
                <button className={styles['button--alt']} onClick={showCartHandler}>Close</button>
              </div>
            )
              : (
                <Checkout
                  showCartHandler={showCartHandler}
                  showThanksHandler={showThanksHandler}
                />
              )}
          </div>
        </Modal>
      ) : (
        <Modal>
          {' '}
          {cartItems}
          {totalAmount <= 0 ? (
            <span className={styles.info}>
              The order is empty. Add some meals to order list.
            </span>
          ) : (
            <div className={styles.total}>
              <span>Total amount</span>
              <span>
                $
                {totalAmount.toFixed(2)}
              </span>
            </div>
          )}
          <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={showCartHandler}>Close</button>
            {items.length > 0 && (
            <button
              className={styles.button}
              onClick={showSummaryHandler}
            >
              Order
            </button>
            )}

          </div>
        </Modal>
      )}
    </>
  );
};
