import styles from "./App.module.css";
import { Outlet, Link } from "react-router-dom";

import PropTypes from "prop-types";

function App() {
  return (
    <>
      <header className={styles.container}>
        <h1>Shopping Cart</h1>
      </header>
      <nav className={styles.container}>
        <p>
          <i>Nav Bar</i>
        </p>
        <Link to={"shop"}>Shop link</Link>
        <br />
        <Link to={"cart"}>Cart link</Link>
        <p>Cart Items and Price</p>
      </nav>
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer className={styles.container}>Footer</footer>
    </>
  );

  // <ChildComponent requiredText="string" />;
}

// function ChildComponent(props) {
//   return (
//     <>
//       <p>Required: {props.requiredText}</p>
//       <p>Optional: {props.optionalText}</p>
//     </>
//   );
// }

// ChildComponent.propTypes = {
//   optionalText: PropTypes.string,
//   requiredText: PropTypes.string.isRequired,
// };

// ChildComponent.defaultProps = {
//   optionalText: "default",
// };

export default App;
