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
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/Route/PrivateRoute';

const spotLoader = async ({ params }) => {
  const res = await fetch('https://assignment10-eight.vercel.app/spot')
  const data = await res.json()
  const spot = data.find(e => e._id === params.id)

  return spot
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader:()=>fetch('https://assignment10-eight.vercel.app/user'),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://assignment10-eight.vercel.app/spot')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: "/touristSpot",
        element: <TouristSpot></TouristSpot>,
        loader: () => fetch('https://assignment10-eight.vercel.app/spot')
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://assignment10-eight.vercel.app/spot')
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
        loader:()=>fetch('https://assignment10-eight.vercel.app/user'),
        
      },
      {
        path:"/myList/:id",
        element:<MyList></MyList>,
        loader:({params})=>fetch(`https://assignment10-eight.vercel.app/user/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: spotLoader
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
