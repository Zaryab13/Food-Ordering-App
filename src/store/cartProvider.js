import CartContext from './cart-context';

export const CartProvider = (props) => {

    const addItemToCartHandler = () => {}
    
    const removeItemFromCartHandler = () =>{}
    

    const cartContext = {
        Items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
