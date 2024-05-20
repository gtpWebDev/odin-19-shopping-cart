import "./App.css";
import { Outlet, Link } from "react-router-dom";

import PropTypes from "prop-types";

function App() {
  return (
    <>
      <header>Shopping Cart</header>
      <nav>
        <p>Nav Bar</p>
        <Link to={"shop"}>Shop link</Link>
        <br />
        <Link to={"cart"}>Cart link</Link>
        <p>Cart Items and Price</p>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
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
