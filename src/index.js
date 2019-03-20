import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyBHrDFb3ACBCwjsV5s1EVfKoWTbY22LAgY",
  authDomain: "iportfolio-77124.firebaseapp.com",
  databaseURL: "https://iportfolio-77124.firebaseio.com",
  projectId: "iportfolio-77124",
  storageBucket: "iportfolio-77124.appspot.com",
  messagingSenderId: "600607936739"
};


firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
