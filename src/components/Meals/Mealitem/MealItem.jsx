import {useContext} from 'react';

import MealItemForm from "./MealItemForm";
import styles from "./Mealitem.module.css";
import CartContext from '../../../store/cart-context';

const MealsList = (props) => {

  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
    
  }
  
  return (
    <li className={styles.meal}>
      <div>
        <h3 className='text-lg'>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler}/>
      </div>
    </li>
  );
};

export default MealsList;
