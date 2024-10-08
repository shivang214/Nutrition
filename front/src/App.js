import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import LandingMain from "./components/LandingMain/LandingMain"
import Splash from "./components/Splash/Splash"
import UploadData from "./components/UploadData/UploadData"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import React, { Component }  from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/LandingMain">
            <LandingMain />
          </Route>
          <Route path="/UploadData">
            <UploadData />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
