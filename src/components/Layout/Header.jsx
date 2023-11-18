import { Fragment } from "react";

import styles from "./Header.module.css";
import MealsBgImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className="text-2xl font-sans">Khpl Khurak</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div>
        <div className={styles["main-image"]}>
          <img src={MealsBgImage} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
