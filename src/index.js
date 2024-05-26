import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const routes=createBrowserRouter(
  [
    {
      path:'./About',
      element:<About/>
    },

    {
      path:'./App',
      element:<App/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 RouterProvider(routes)
);






