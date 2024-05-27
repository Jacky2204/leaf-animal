import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import page link to display on browser

import { How } from "./view/How.js";
// import { Home } from "./view/Home.js";
// import { FW } from "./view/FF";
// import { Blog } from "./view/Blog";
// import { Cprofile } from "./view/Cprofile";
// import { Sponsor } from "./view/Sponsor";

// import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// const routes=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Home/>
//     },

//     {
//       path:'./How', browser
//       element:<How/>
//     }
//   ]
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // call pages
  //   <RouterProvider router={routes}/>
  // <Home />
  <How />
  // <FW />
  // <Blog />
  // <Cprofile />
  // <Sponsor />
);
