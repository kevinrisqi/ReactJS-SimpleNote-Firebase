import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from '../Dashboard';
import Register from './../Register/index';
import Login from './../Login/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  popup: false,
  isLogin: false
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_POPUP') {
    return {
      ...state,
      popup: action.value
    }
  }

  if (action.type === 'CHANGE_ISLOGIN') {
    return {
      ...state,
      isLogin: action.value
    }
  }
  return state;
}

const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
