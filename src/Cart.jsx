import { Link } from "react-router-dom";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.container}>
      <p>Cart Page</p>
      <Link to={"/"}>Return to home page</Link>
    </div>
  );
}

export default Cart;
