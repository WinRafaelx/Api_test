import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Upcomingpage from './pages/Upcomingpage';
import { GlobalContextProvider } from './context/giobal';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },{
    path: "/upcoming",
    element: <Upcomingpage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </GlobalContextProvider>
)
