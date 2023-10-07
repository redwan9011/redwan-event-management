import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOuts from './LayOuts/LayOuts';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CardDetails from './HomeComponents/CardDetails/CardDetails';
import PrivateRout from './PrivateRout/PrivateRout';
import AuthProvider from './AuthProvider/AuthProvider';
import ErrorPage from './pages/errorPage/ErrorPage';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/About/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
        
      },
      {
        path: "/card/:id",
        element: <PrivateRout><CardDetails></CardDetails></PrivateRout>,
        loader: () => fetch('../public/data.json')
        
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/contact",
        element:<PrivateRout><Contact></Contact></PrivateRout>
      },
      {
        path: "/about",
        element:<PrivateRout><AboutUs></AboutUs></PrivateRout>
      },

      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
