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

import Profile from './pages/HomePageChildren/Profile'
import HomePage from './pages/HomePage'
import Inventory from './pages/HomePageChildren/Inventory'
import Notifications from './pages/HomePageChildren/Notifications'

export default (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
        <IndexRoute component={Navigation} />
        <Route path="login" component={LoginPage}/>
        <Route path="home" component={Navigation}>
            <Route path="dash" component={HomePage}/>
            <Route path="profile" component={Profile}/>
            <Route path="inventory" component={Inventory}/>
            <Route path="notice" component={Notifications}/>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
