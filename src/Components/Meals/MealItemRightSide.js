import { useState } from 'react';
import styles from './MealItemRightSide.module.css';

export const MealItemRightSide = (props) => {
  const [count, setCount] = useState(0);

  const countHandler = (e) => {
    setCount(e.target.value);
  };
  return (
    <form className={styles.container}>
      <input type="number" onChange={countHandler} />
      <button>
        Zamów
      </button>
      <p>
        Cena:
        {count > 0 ? (count * props.price).toFixed(2) : '0'}
      </p>
    </form>
  );
};
