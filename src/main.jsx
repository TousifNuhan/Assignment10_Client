import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import ErrorPage from './components/Errorpage/ErrorPage';
import Home from './components/pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddTouristSpot from './components/pages/AddTouristSpot';
import AllTouristSpot from './components/pages/AllTouristSpot';
import MyList from './components/pages/MyList';
import Details from './components/pages/Details';
import TouristSpot from './components/pages/TouristSpot';

const spotLoader= async({params})=>{
          const res=await fetch('http://localhost:5000/spot')
          const data=await res.json()
          const spot=data.find(e=>e._id === params.id)
          
          return spot
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/spot')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addTouristSpot",
        element:<AddTouristSpot></AddTouristSpot>
      },
      {
        path:"/touristSpot",
        element:<TouristSpot></TouristSpot>,
        loader:()=>fetch('http://localhost:5000/spot')
      },
      {
        path:"/allTouristSpot",
        element:<AllTouristSpot></AllTouristSpot>
      },
      {
        path:"/myList",
        element:<MyList></MyList>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: spotLoader
      }
      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
