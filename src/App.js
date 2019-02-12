import React, { Component } from 'react';
import './App.css';
import Login from './Login/renderer.js';
import Nav from './Nav/nav.js';
import Slider from './Slider/slider.js';

class App extends Component {
  render() {
    return (
	    <div>
	    	<Nav/>
	    	<Slider/>
	    	<Login/>
 		</div>
    );
  }
}

export default App;
