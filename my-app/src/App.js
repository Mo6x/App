import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./component/Header/header";
import Register from "./component/Register/register";
import Login from './component/Login/login';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
          <Route path="/" exact>
               <Register />
               <Link to="Login"> Alrady Login</Link> 
          </Route>
          <Route path="/Login">
          <Login />
          <Link to="Register"> Register Now</Link> 
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;