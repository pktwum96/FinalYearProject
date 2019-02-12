import React, { Component } from 'react';
import './App.css';
import Login from './Login/renderer.js';
import Nav from './Nav/nav.js';
import Slider from './Slider/slider.js';
import Aboutservices from './AboutServices/aboutservices.js';

class App extends Component {
  render() {
    return (
	    <div>
	    	<Nav/>
	    	<Slider/>
	    	<Aboutservices/>
	    	<Login/>
 		</div>
    );
  }
}

export default App;
