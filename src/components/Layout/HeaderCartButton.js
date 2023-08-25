import { useContext } from 'react';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  //  item is the currentValue
  const noOfListItems = cartCtx.items.reduce((currentIndex , item )=>{
    return currentIndex + item.amount;
  }, 0)
  return (
    <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{noOfListItems}</span>
    </button>
  )
}
export default HeaderCartButton;
