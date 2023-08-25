import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", price: 12.99, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}onClick={props.onClose}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
