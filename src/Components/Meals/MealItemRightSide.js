import { useState } from 'react';
import { Input } from '../UI/Input/Input';
import styles from './MealItemRightSide.module.css';

export const MealItemRightSide = (props) => {
  const [count, setCount] = useState(0);

  const countHandler = (e) => {
    setCount(e.target.value);
  };
  const inputConfig = {
    type: 'number',
    onChange: countHandler,
    label: 'Quantity',
    id: `amount_${props.id}`,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={styles.form}>
      <Input
        input={inputConfig}
      />
      <button>
        + Add
      </button>
      <p>
        Price:
        {count > 0 ? (count * props.price).toFixed(2) : '0'}
        $
      </p>
    </form>
  );
};
