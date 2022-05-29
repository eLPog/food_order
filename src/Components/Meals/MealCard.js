import styles from './MealCard.module.css';

export const MealCard = (props) => {
  return (
    <ul>
      {props.meals.map((el)=>(
        <div className={styles.card} key={el.id}>
          <li>
            {el.name}
          </li>
          <li>{el.description}</li>
          <li>{el.price}</li>
        </div>
      ))}
    </ul>
  );
};
