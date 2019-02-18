import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import Login from './components/Login.js';

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
