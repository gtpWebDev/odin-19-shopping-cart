import styles from "./Home.module.css";

function Home() {
  const tempItemArray = ["item1", "item2", "item3", "item4"];

  return (
    <div>
      <h2 className={styles.header}>Home Page</h2>
    </div>
  );
}

export default Home;
