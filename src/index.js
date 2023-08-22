import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';


const router =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <h1> Sorry .........................</h1>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


