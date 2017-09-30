import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import MyStuff from './pages/my';
import Settings from './pages/settings';
import Series from './pages/series';

// render on page
ReactDOM.render(
  <HashRouter>
    <div className="container is-fluid">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/my" component={Login} />
        <Route path="/series/:id" component={Home} />
        <Route path="/episode/:id" component={Login} />
        <Route component={Home} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('app')
);
