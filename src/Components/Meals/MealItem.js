import { useContext } from 'react';
import styles from './MealItem.module.css';
import { Card } from '../UI/Card/Card';
import { MealItemRightSide } from './MealItemRightSide';
import { CartContext } from '../../Context/CartContext/CartContext';

export const MealItem = (props) => {
  const cartCTX = useContext(CartContext);
  const addToCartHandler = (amount)=>{
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <Card key={props.id}>
      <div className={styles.mealsContainer}>
        <li className={styles.name}>
          {props.name}
        </li>
        <li className={styles.description}>{props.description}</li>
        <li className={styles.price}>
          $
          {props.price.toFixed(2)}

        </li>
      </div>
      <MealItemRightSide onAddToCart={addToCartHandler} price={props.price} id={props.id} />
    </Card>

  );
};
