import { Link } from "react-router-dom";

import styles from "./Shop.module.css";

function Shop() {
  return (
    <div className={styles.container}>
      <p>Shop Page</p>
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/item"}>Click on item</Link>
      <br />
      <Link to={"/"}>Return to home page</Link>
    </div>
  );
}

export default Shop;
