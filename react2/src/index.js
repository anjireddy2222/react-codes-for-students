import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import Signup from './Auth/Signup';

import Home from './Home';
import Login from './Auth/Login';
import List from './Courses/List';
import ProductsList from './Products/ProductsList';
import ProfileUpdate from './Profile/ProfileUpdate';
import Products from './ReadData/Products';
import UsersList from './Users/UsersList';
import Icons from './Icons';
import Layout from './Layout';
import DataTest from './DataTest';
import { Provider } from 'react-redux';
import store from './store/store';
import Amazon from './Amazon';
import Card from './Cradproj';
import './app.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Product from './Products/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/create-account' Component={Signup} />
        <Route path='/' Component={Card} />
        <Route path='/signin' Component={Login} />
        <Route path='/courses' Component={List} />
        <Route path="/products-list" Component={ProductsList} />
        <Route path='/profile-update' Component={ProfileUpdate} />
        <Route path='/api-practice' Component={Products} />
        <Route path='/manage-users' Component={UsersList} />
        <Route path='/icons' Component={Icons} />
        <Route path='/layout' Component={Layout} />
        <Route path='/redux' Component={DataTest} />
        <Route path='/product' Component={Product} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
