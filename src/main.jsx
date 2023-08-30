import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import NotFound from './pages/NotFound.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/produtos", element: <Product /> },
    { path: "/produtos/editar/:id", element: <UpdateProduct /> }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
