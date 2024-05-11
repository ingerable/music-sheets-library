import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Menu from "./routes/Menu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
]);


function App() {
  return (
    <React.StrictMode>
      <Menu/>

    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
