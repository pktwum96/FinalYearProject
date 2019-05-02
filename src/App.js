import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Assessment from './Assessment';
import Dashboard from './Dashboard';
import Invest from './Invest';
import Learn from './Learn';
import Default from './Default';
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
