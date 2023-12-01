import { useContext, useState, Fragment } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [hasOrdered, setHasOrdered] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartitemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartitemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderClickHandler = () => setHasOrdered(true);

  const checkoutSubmitHandler = async (userData) => {
    setIsSubmiting(true);
    const response = await fetch(
      "https://http-requests-807b4-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          userData: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setHasSubmitted(true);
    
    cartCtx.cartReset();
  };

  const actionButtons = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasOrdered && (
        <CheckoutForm
          onConfirm={checkoutSubmitHandler}
          onCancel={props.onClose}
        />
      )}
      {!hasOrdered && actionButtons}
    </Fragment>
  );

  const isSubmittingModalContent = (
    <div className="flex flex-row gap-2 justify-center">
      <div className="w-4 h-4 rounded-full bg-[#8A2B06] animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-[#8A2B06] animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#8A2B06] animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
  const hasSubmittedModalContent = (
    <Fragment>
      <p className="py-4">Your Order Has Been Submitted</p>
      <div className="text-right">
        <button
          type="button"
          className="bg-transparent border border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white text-[#5a1a01] py-2 px-7 rounded-3xl"
          onClick={props.onClose}
        >
          Cancel
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !hasSubmitted && cartModalContent}
      {isSubmiting && isSubmittingModalContent}
      {hasSubmitted && hasSubmittedModalContent}
    </Modal>
  );
};
export default Cart;
