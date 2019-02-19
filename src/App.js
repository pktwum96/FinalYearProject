import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Register from './components/Register.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/" component={LandingPage}  exact/>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
