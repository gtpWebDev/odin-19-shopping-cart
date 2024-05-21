import styles from "./App.module.css";
import { Outlet, Link } from "react-router-dom";
import trolleyImg from "./assets/icons/trolley.svg";
import shopImg from "./assets/icons/shop.svg";
import moonImg from "./assets/icons/moon.svg";

import PropTypes from "prop-types";

function App() {
  return (
    <>
      <header>Shopping Cart</header>
      <nav>
        <div className={styles.navLeft}>
          <MenuItem route="/" text="Home" imgSrc={trolleyImg} />
          <MenuItem route="shop" text="Shop" imgSrc={shopImg} />
          <MenuItem route="cart" text="Cart:Items/Price" imgSrc={trolleyImg} />
        </div>
        <div className={styles.navRight}>
          <img className={styles.menuImg} src={moonImg} />
        </div>
      </nav>
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer className={styles.container}>Footer</footer>
    </>
  );

  // <ChildComponent requiredText="string" />;
}

function MenuItem(props) {
  return (
    <Link className={styles.menuItem} to={props.route}>
      <img className={styles.menuImg} src={props.imgSrc} />
      {props.text}
    </Link>
  );
}

MenuItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default App;
