import React, { Component } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/" component={LandingPage}  exact/>
                  <Route path="/login" component={Login} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
