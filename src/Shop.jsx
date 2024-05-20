import { Link } from "react-router-dom";

import styles from "./Shop.module.css";

function Shop() {
  const tempItemArray = ["item1", "item2", "item3", "item4"];

  return (
    <div>
      <h1 className={styles.header}>Shop Page</h1>
      {tempItemArray.map((element) => {
        return (
          <Link key={element} to={"/item"}>
            <p className={styles.container}>Click on {element}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
