import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blogs from './Component/Blogs/Blogs';
import Jobs from './Component/Jobs/Jobs';
import Statistics from './Component/Statistics/Statistics';
import ErrorPage from './Component/ErrorPage/ErrorPage';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './Component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('jobs.json'),

      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../jobs.json')
        
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
