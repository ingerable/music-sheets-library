import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Menu from "./routes/Menu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
    errorElement: <ErrorPage/>
  },
]);


function App() {
  return (
    <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
