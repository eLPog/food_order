import styles from './AvaibleMeals.module.css';
import { MealItem } from './MealItem';
import { meals } from '../../db/mealsDatabase';

export const AvailableMeals = () => {
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};
