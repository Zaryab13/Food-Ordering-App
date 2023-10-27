import { useState, useEffect, useCallback } from "react";
import classes from "./AvailableMeals.module.css";

import MealItem from "./Mealitem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    // setIsError(null);
    try {
      const response = await fetch(
        "https://http-requests-807b4-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const mealsResponse = [];

      for (const key in data) {
        mealsResponse.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      console.log(mealsResponse);
      setMeals(mealsResponse);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  console.log(meals);
  const loader = <p className={classes.loading}>Loading...</p>;
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{isLoading ? loader : mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
