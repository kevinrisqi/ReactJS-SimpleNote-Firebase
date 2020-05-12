import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../Dashboard';
import Register from './../Register/index';
import Login from './../Login/index';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
