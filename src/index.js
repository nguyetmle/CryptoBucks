import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import Crypto from './pages/Crypto';
import CryptoDetail from './components/CryptoDetail';

const router = createBrowserRouter([ //create routes for components
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetail />
          }
        ]
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetail />
          }
        ]
      },
      {
        path: "/saved",
        element: <Saved />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetail />
          }
        ]
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


