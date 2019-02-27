import React from 'react';
import '../styles/Dashboard.css'
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';


class Dashboard extends React.Component {

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
            <div id="wrapper" className={this.state.active ? "d-flex toggled active" : "d-flex"}>
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar changeClass={this.changeClass}/>
                    <div className="container-fluid ">
                        <h5>Dashboard</h5>
                        <div className="Stats">
                            <div className="row">
                                <div className="col-md-3">
                                    <h2>$ 100,000</h2>
                                    <p>Initial Deposit</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>$ 101,000</h2>
                                    <p>Current Value</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>1%</h2>
                                    <p>Percentage Change</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>$ 150,000</h2>
                                    <p>Projected Value</p>
                                </div>
                            </div>

                        </div>

                        <div className="row graphs">
                            <div className="col-md-2">
                                <div className="well">
                                    <h4>Goal</h4>
                                    <div className="progress">
                                        <div className="progress-bar seventy" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            70%
                                        </div>
                                    </div>
                                    <p>$101,000 of $150,000</p>
                                </div>
                                <div className="well">
                                    <h4>Time Passed</h4>
                                    <div className="progress">
                                        <div className="progress-bar forty" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            45%
                                        </div>
                                    </div>
                                    <p>Day 175 of 365 </p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                Maga
                            </div>
                            <div className="col-md-3">
                            <div className="well">
                            </div>
                            <div className="well">
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
