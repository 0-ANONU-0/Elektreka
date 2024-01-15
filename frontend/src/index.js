import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Product from './pages/ProductPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path="/" element={<Home/>} /> {/* index is set true, because without it may show multiple screens */}
      <Route path="/product/:id" element={<Product/>} /> {/* in path the text after : represents a placeholder for the path */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
