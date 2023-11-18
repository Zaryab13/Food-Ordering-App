import {Fragment} from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default meals;
