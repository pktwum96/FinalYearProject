import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Assessment from './components/Assessment.js';
import Dashboard from './components/Dashboard.js';
import Invest from './components/Invest.js';
import Learn from './components/Learn.js';
import Default from './components/Default.js';
import {ProductProvider} from './components/context.js';

class App extends Component {
    render() {
        return (
            <ProductProvider>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={LandingPage}  exact/>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/learn" component={Learn} />
                            <Route path="/invest" component={Invest} />
                            <Route path="/assessment" component={Assessment} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route component={Default} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </ProductProvider>
        );
    }
}

export default App;
