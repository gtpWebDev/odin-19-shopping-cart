import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import Item from "./Item.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "item",
        element: <Item />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*

Objectives for shopping cart project:
  - Create a house style for all future projects
  - Develop the react template further - may have to deal with things such as images, etc. routing, testing, etc.
  - Develop a custom hook for fetches for practice
  - Apply propTypes
  - Start to create an overall development methodology:
    - Map out overall concept and structure on paper
      - Don't worry about detailed page content, just main elements
      - Should cover pages at very high level
    - Generate a routing structure
    - Sketch out structure within page
    - Generate sketches of components
    - Decide on order of development of functionality
    - Apply test driven development for developing components (wiuth associated jest testing)
  - Try out some different styling options - CSS-in-JS, styled component library

*/

/*
Top level structure:
  - Home page
  - Shop page - Contains simple cards with click through to relevant card page
  - Item page - dynamic routing with individual item parameter
  - Cart
*/
