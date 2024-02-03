import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Upcomingpage from './pages/Upcomingpage';
import Favoritepage from './pages/Favoritepage';
import Airingpage from './pages/Airingpage';
import { GlobalContextProvider } from './context/giobal';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },{
    path: "/upcoming",
    element: <Upcomingpage />,
  }, {
    path: "/favorites",
    element: <Favoritepage />,
  }, {
    path: "/airing",
    element: <Airingpage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </GlobalContextProvider>
)
