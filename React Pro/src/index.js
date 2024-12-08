import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './shared/Login';
import Signup from './shared/CreateAccount';
import ResetPassword from './shared/ResetPassword';
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyEditor from './MyEditor';
import Search from './products/Search';
import SingleProduct from './products/SingleProduct';
import Addresses from './address/Addresses';
import "react-toastify/dist/ReactToastify.css";
import Cart from './products/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='login' Component={Signin} ></Route>
        <Route path='create-account' Component={Signup} ></Route>
        <Route path='/' Component={Home} />
        <Route path='reset-password' Component={ResetPassword} />
        <Route path='/editor' Component={MyEditor} />
        <Route path='/product-search' Component={Search} />
        <Route path='/product/:productId' Component={SingleProduct} />
        <Route path='/addresses' Component={Addresses} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



