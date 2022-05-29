import styles from './MealItem.module.css';
import { Card } from '../UI/Card/Card';
import { MealItemRightSide } from './MealItemRightSide';

export const MealItem = (props) => {
  return (
    <ul>
      {props.meals.map((el)=>(
        <Card key={el.id}>
          <div className={styles.liContainer}>

            <li>
              {el.name}
            </li>
            <li className={styles.description}>{el.description}</li>
            <li>{el.price.toFixed(2)}</li>
          </div>
          <MealItemRightSide price={el.price} />
        </Card>
      ))}
    </ul>

  );
};
