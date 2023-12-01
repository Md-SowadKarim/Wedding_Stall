import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './../Layout/mainlayout/MainLayout';
import Error from './../Layout/error/Error';
import Home from '../Layout/home/Home';
import About from './../Layout/about/About';
//import Feature from './../Layout/feature/Feature';
import Login from '../Layout/login/Login';
import Register from './../Layout/login/Register';
import Blogs from './../Layout/blogs/Blogs';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Details from './../Layout/details/Details';
import Favourite from '../Layout/favourite/Favourite';

const Root = createBrowserRouter([
 {
  path:"/",
  element:<MainLayout></MainLayout>,
  errorElement:<Error></Error>,
  children:[
    {
      path:"/",
      element:<Home/>,
      loader:()=>fetch("/data.json")
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/fav",
      element:<PrivateRoute><Favourite/></PrivateRoute>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signUp",
      element:<Register/>
    },
    {
      path:"/contact",
      element:<PrivateRoute><Blogs/></PrivateRoute>
    },
    {
      path: "/details/:cartId",
      element:<Details></Details>,
      loader:()=>fetch("data.json"),
  
    },
  ]

  
 }

])

export default Root
