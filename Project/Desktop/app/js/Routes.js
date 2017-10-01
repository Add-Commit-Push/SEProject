'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute,hashHistory} from 'react-router';
import ReactRouter from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createBrowserHistory';

import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import App from './App';

import Profile from './pages/HomePageChildren/Profile';
import HomePage from './pages/HomePage';
import Inventory from './pages/HomePageChildren/Inventory';
import Archives from './pages/HomePageChildren/Archives';
import MenuItem from './pages/HomePageChildren/MenuItem';
import Employees from './pages/HomePageChildren/Employees';
import Customer from './pages/HomePageChildren/Customer';

export default (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
        <IndexRoute component={Navigation} />
        <Route path="login" component={LoginPage}/>
        <Route path="home" component={Navigation}>
            <Route path="dash" component={HomePage}/>
            <Route path="profile" component={Profile}/>
            <Route path="inventory" component={Inventory}/>
            <Route path="archives" component={Archives}/>
            <Route path="menu" component={MenuItem}/>
            <Route path="employees" component={Employees}/>
            <Route path="customer" component={Customer}/>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
