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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query' ;
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Payment from './components/Payment/Payment';
import Invoice from './components/Invoice/Invoice';

const queryClient=new QueryClient()

const spotLoader = async ({ params }) => {
  const res = await fetch('http://localhost:5000/spot')
  const data = await res.json()
  const spot = data.find(e => e._id === params.id)

  return spot
}

const router = createBrowserRouter([
 {
        path:"/invoice",
        element:<Invoice></Invoice>,
        // loader:spotLoader
      },
  {
    path: "/",
    element: <Root />,
    loader: () => fetch('http://localhost:5000/user'),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/spot')
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
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
        // loader: () => fetch(`http://localhost:5000/user?email`),

      },
      {
        path: "/myList/:id",
        element: <MyList></MyList>,
        // loader:({params})=>fetch(`http://localhost:5000/user/${params.id}` , {credentials:"include"} )

      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: spotLoader
      },
      {
        path:"details/:id/payment",
        element:<Payment></Payment>,
        loader: spotLoader
      },
     

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
