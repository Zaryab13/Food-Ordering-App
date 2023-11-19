import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";

import MealItem from "./Mealitem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMealsHandler = async () => {
      const response = await fetch(
        "https://http-requests-807b4-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(response);

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
      // console.log(mealsResponse);
      setMeals(mealsResponse);
      setIsLoading(false);
    };

    fetchMealsHandler().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, []);

  console.log(meals);
  const loader = (
    <div className="flex justify-center">
      <svg className={classes.loaderSVG} viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <p className={classes.errorMessage}>Unable to fetch Data</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>{isLoading ? loader : mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
