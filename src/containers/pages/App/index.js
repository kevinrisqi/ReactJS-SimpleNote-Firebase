import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from '../Dashboard';
import Register from './../Register/index';
import Login from './../Login/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
