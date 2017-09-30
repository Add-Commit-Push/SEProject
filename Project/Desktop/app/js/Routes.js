'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute,hashHistory} from 'react-router';
import ReactRouter from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createBrowserHistory';

import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';

import Profile from './pages/HomePageChildren/Profile'
import HomePage from './pages/HomePage'
import Inventory from './pages/HomePageChildren/Inventory'

export default (
  <Router history={createHistory()}>
    <Route path="/" component={Navigation}>
    <IndexRoute component={Navigation} />
        <Route path="login" component={Navigation}/>
        <Route path="home" component={Navigation}>
            <Route path="dash" component={HomePage}/>
            <Route path="profile" component={Profile}/>
            <Route path="inventory" component={Inventory}/>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
