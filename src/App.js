import React , {useState} from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);  
  }
  
  const hideCartHandler = () => {
    setIsCartShown(false);
  }
  

  return (
    <React.Fragment>
      {isCartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
