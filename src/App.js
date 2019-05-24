import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './_shared/store';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Assessment from './Assessment';
import Dashboard from './Dashboard';
import Invest from './Invest';
import Learn from './Learn';
import Default from './Default';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Switch>
							<Route path="/" component={LandingPage} exact />
							<Route path="/dashboard" render={() => <Dashboard />} />
							<Route path="/learn" render={() => <Learn />} />
							<Route path="/invest" render={() => <Invest />} />
							<Route path="/assessment" render={() => <Assessment />} />
							<Route path="/login" render={() => <Login />} />
							<Route path="/register" render={() => <Register />} />
							<Route component={Default} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
