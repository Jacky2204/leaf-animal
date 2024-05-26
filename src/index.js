import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import page link to display on browser
import { How } from "./view/How.js";
import { Home } from "./view/Home.js";


import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },

    {
      path:'./How',
      element:<How/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // call pages
  <RouterProvider router={routes}/>
);






