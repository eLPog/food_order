import styles from './MealItem.module.css';
import { Card } from '../UI/Card/Card';

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
          <div className={styles.rightContainer}>
            <p>
              Cena:
              {el.price.toFixed(2)}
            </p>
            <button>
              Zamów
            </button>
          </div>
        </Card>
      ))}
    </ul>

  );
};
