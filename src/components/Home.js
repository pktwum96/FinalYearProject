import React, { Component } from 'react';
import '../styles/Home.css';
import {Switch, Route} from 'react-router-dom';
import Assessment from './Assessment.js';
import Dashboard from './Dashboard.js';
import Invest from './Invest.js';
import Learn from './Learn.js';


class Home extends React.Component {

    constructor (){
        super();
        this.state = {

            active:false
        }
        this.changeClass = e => {
            e.preventDefault();
            this.setState({active: !this.state.active})
        }
    }



    render() {
        return (
            <div id="Home">
            <div className={this.state.active ? "d-flex toggled active" : "d-flex"} id="wrapper" >

            {/* Sidebar */}
            <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"><h2>iPortfolio</h2></div>
            <div className="list-group list-group-flush">
            <ul className="nav nav-tabs">
            <li className="active">
            <a href="#Dashboard" className="list-group-item list-group-item-action bg-dark" data-toggle="tab">
            <i class="material-icons" >poll</i>
            <h5>Dashboard</h5>
            </a>
            </li>
            <li>
            <a href="#Assessment" className="list-group-item list-group-item-action bg-dark" data-toggle="tab">
            <i class="material-icons" >work</i>
            <h5>Assessment</h5>
            </a>
            </li>
            <li>
            <a href="#Invest" className="list-group-item list-group-item-action bg-dark" data-toggle="tab">
            <i class="material-icons">account_balance_wallet</i>
            <h5>Invest</h5>
            </a>
            </li>
            <li>
            <a href="#Learn" className="list-group-item list-group-item-action bg-dark" data-toggle="tab">
            <i class="material-icons" >school</i>
            <h5>Learn</h5>
            </a>
            </li>
            </ul>
            </div>
            </div>
            {/* /#sidebar-wrapper */}

            {/* Page Content */}
            <div id="page-content-wrapper">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="sidebartoggler" onClick={this.changeClass}><i className="material-icons">apps</i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
            <a><i className="material-icons">announcement</i></a>
            </li>
            <li className="nav-item">
            <a><i className="material-icons">notifications_none</i></a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="material-icons">account_circle</i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Portfolio</a>
            <a className="dropdown-item" href="#">Wallet</a>
            <a className="dropdown-item" href="/login">Logout</a>
            </div>
            </li>
            </ul>
            </div>
            </nav>

            <div className="container-fluid tab-content">

            <div id="Dashboard" className="tab-pane fade in active">
            <Dashboard/>
            </div>
            <div id="Assessment" className="tab-pane fade">
            <Assessment/>
            </div>
            <div id="Invest" className="tab-pane fade">
            <Invest/>
            </div>
            <div id="Learn" className="tab-pane fade">
            <Learn/>
            </div>
            </div>
            </div>
            </div>


            </div>
        );
    }
}

export default Home;
