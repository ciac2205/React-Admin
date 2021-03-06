import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import Login from './public/Login';
import { BrowserRouter, Route } from "react-router-dom";
import Register from './public/Register';
function App(): JSX.Element {
  return (
    <div className="App">

      <BrowserRouter>
        <Route path='/' exact component={Dashboard} />
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
