import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
    <section className={classes.summary}>
    <h2 className='text-4xl'>Delicious Food, Delivered To You</h2>
      <p className='text-slate-200'>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className='text-slate-200'>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
    )
}

export default MealsSummary;
