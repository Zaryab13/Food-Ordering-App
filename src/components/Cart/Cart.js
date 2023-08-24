import styles from "./Cart.module.css";

const Cart = (prop) => {

    const cartItems = <ul className={styles["cart-items"]}>
        {[{id: "c1" , name: "sushi", price: 12.99, amount: 2}].map(item => <li>{item.name}</li>)}
    </ul>

  return (
    <div>
      {cartItems}
      <span>Total Amount</span>
      <span>23</span>
      <div className={styles.actions}>
        <button className={styles.button}>Cancel</button>
        <button className={styles['button--alt']}>Order</button>
      </div>
    </div>
  );
};
export default Cart;
