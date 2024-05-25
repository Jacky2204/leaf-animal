import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import page link to display on browser 
import {How} from './view/How.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // call pages
<How/>
);


// import { createBrowserRouter,RouterProvider } from 'react-router-dom';


// const routes=createBrowserRouter(
//   [
//     {
//       path:'./About',
//       element:<About/>
//     },

//     {
//       path:'./App',
//       element:<App/>
//     }
//   ]
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  RouterProvider(routes)
// );
