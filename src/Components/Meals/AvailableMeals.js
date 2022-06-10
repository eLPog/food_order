import { useEffect, useState } from 'react';
import styles from './AvaibleMeals.module.css';
import { MealItem } from './MealItem';

export const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  useEffect(()=>{
    const fetchMeals = async ()=>{
      try {
        const data = await fetch('https://foodorder-35f36-default-rtdb.europe-west1.' +
            'firebasedatabase.app/meals.json');
        const res = await data.json();
        const meals = [];
        for (const key in res) {
          meals.push({
            id: key,
            name: res[key].name,
            description: res[key].description,
            price: res[key].price,
          });
        }
        setAllMeals(meals);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeals();
  }, []);

  const mealsList = allMeals.map((meal) => (
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
