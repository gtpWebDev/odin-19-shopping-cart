import { Link } from "react-router-dom";

import styles from "./Item.module.css";

function Item() {
  return (
    <div className={styles.container}>
      <p>Item Page</p>
      <Link to={"../shop"}>Return to shop page</Link>
    </div>
  );
}

export default Item;
