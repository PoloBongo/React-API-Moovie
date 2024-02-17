import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Moovie_Popular from "./pages/Moovie_Popular";
import App from "./App";
import Moovie from "./pages/Moovie";
import Test from "./pages/Test";
import Moovie_Category_Animation from "./pages/Moovie_Category_Animation";
import Moovie_Category_Action from "./pages/Moovie_Category_Action";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/popular_moovie",
    element: <Moovie_Popular />,
  },
  {
    path: "/moovie/:id",
    element: <Moovie />,
  },
  {
    path: "/moovie_catergory_action/:id",
    element: <Moovie_Category_Action />,
  },
  {
    path: "/moovie_category_animation/:id",
    element: <Moovie_Category_Animation />,
  },
  {
    path: "/try/",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
