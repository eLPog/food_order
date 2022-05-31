import { useContext, useState, useRef } from 'react';
import { Input } from '../UI/Input/Input';
import styles from './MealItemRightSide.module.css';
import { CartContext } from '../../Context/CartContext/CartContext';

export const MealItemRightSide = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [count, setCount] = useState(0);
  const { addItem } = useContext(CartContext);

  /*
  Przekazuje amountInputRef jako ref do custom Component Input,
  tamta funkcja ubrana jest w React.forwardRef,
   która jako drugi argument przyjmuje ref,
  ref podpięte jest pod input pod klucz - ref
  Poprzez ten ref mamy dostęp do rzeczy z inputa
  np. value tego inputa to amountInputRef.current.ref
  To zawsze jest CURRENT
  To jest zawsze STRING
   */
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  const inputConfig = {
    type: 'number',
    label: 'Quantity',
    id: `amount_${props.id}`,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        input={inputConfig}
        ref={amountInputRef}
      />
      <button>
        + Add
      </button>
      <p>
        {!amountIsValid && 'You can buy min. 1 and max. 5 products'}
      </p>
    </form>
  );
};
