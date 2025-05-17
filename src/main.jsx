import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import CoffeeDetails from './Components/CoffeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        errorElement:<h1 className='text-5xl text-center mt-50 text-red-600'>404 PAGE NOT FOUND</h1> ,
        loader:()=> fetch('http://localhost:5000/coffees'),
        Component:Home
      },
      {
       path:'addCoffee',
       Component:AddCoffee
      },
      {
        path:'coffee/:id',
        
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),

        Component:CoffeeDetails  
      },

      {
        path:'updateCoffee/:id',
      loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component:UpdateCoffee
      }
    ]
  },
  {

  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
