import { useContext, useState , useEffect} from 'react';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
  const [newItemAdded, setNewItemAdded] = useState(false);
  
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const btnClasses = `${styles.button} ${(newItemAdded)? styles.bump: ''}`;


  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setNewItemAdded(true);

    const timer = setTimeout(() => {
      setNewItemAdded(false);
    }, 100);
    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
export default HeaderCartButton;
