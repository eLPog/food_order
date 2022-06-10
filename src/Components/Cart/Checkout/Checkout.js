import React, { useContext, useRef, useState } from 'react';
import styles from './Checkout.module.css';
import { CartContext } from '../../../Context/CartContext/CartContext';
import { isFormValid } from '../../../utils/isFormValid';

export const Checkout = (props)=>{
  const {
    totalAmount, clearOrder,
  } = useContext(CartContext);
  const [errorInfo, setErrorInfo] = useState('');
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (e) =>{
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const isFormularValid = isFormValid(enteredName, enteredStreet, enteredPostal, enteredCity);
    console.log(isFormularValid);
    if (isFormularValid.status) {
      setErrorInfo('');
      clearOrder();
      props.showThanksHandler();
    }
    setErrorInfo(isFormularValid.info);
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <p className={styles.error}>{errorInfo}</p>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Order</button>
        <button
          className={styles['button--alt']}
          onClick={props.showCartHandler}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
