import { useContext, useEffect, useState } from 'react';
import { CartIcon } from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { ShowCartContext } from '../../../Context/ShowCartContext/ShowCartContext';
import { CartContext } from '../../../Context/CartContext/CartContext';

export const HeaderCartButton = () => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const { items } = useContext(CartContext);
  const { showCartHandler } = useContext(ShowCartContext);

  useEffect(()=>{
    if (items.length === 0) return;
    setIsButtonAnimated(true);
    const timer = setTimeout(()=>{
      setIsButtonAnimated(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button
      className={`${styles.button} 
    ${isButtonAnimated ? styles.movement : ''}`}
      onClick={showCartHandler}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{items.length}</span>

    </button>
  );
};
