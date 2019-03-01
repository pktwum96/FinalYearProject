import React from 'react';
import '../styles/Dashboard.css'
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Barchart from './Barchart.js';
import Doughnutchart from './Doughnut.js';
import Linechart from './Linechart.js';


class Dashboard extends React.Component {

    constructor (){
        super();
        this.state = {

            active:false,
            expand:false
        }
        this.changeClass = e => {
            e.preventDefault();
            this.setState({active: !this.state.active})
        }
        this.expandDiv = e => {
            e.preventDefault();
            this.setState({expand: !this.state.expand})
        }
    }

    render() {
        return (
            <div id="wrapper" className={this.state.active ? "d-flex toggled active" : "d-flex"}>
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar changeClass={this.changeClass} page="Dashboard"/>
                    <div className="container-fluid ">
                        <div className="row" id="Dashboard">
                            <div id="maindisplay" className="col-md-9">
                                <div className="Stats">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="well">
                                                <h2>₵ 100,000</h2>
                                                <p>Initial Deposit</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well">
                                                <h2>₵ 101,000</h2>
                                                <p>Current Value</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well">
                                                <span id="inLine">
                                                    <i class="fas fa-caret-up"></i>
                                                    <h2>1%</h2>
                                                </span>
                                                <p>Change</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well">
                                                <h2>₵ 150,000</h2>
                                                <p>Projected Value</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="well">
                                    <div className="row graphs">
                                        <div className="col-md-3">
                                            <div className="well">
                                                <h4>Goal</h4>
                                                <div className="progress">
                                                    <div className="progress-bar seventy" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                        70%
                                                    </div>
                                                </div>
                                                <p>₵101,000 of ₵150,000</p>
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
                                        <div className="col-md-9">
                                            <Barchart/>
                                        </div>
                                    </div>
                                    <div className="row second">
                                        <div className="col-md-9">
                                            <Linechart/>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well">
                                                <h4>Number of Assets</h4>
                                                <h1>44</h1>
                                            </div>
                                            <div className="well">
                                                <h4>Asset Classes</h4>
                                                <Doughnutchart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="well assets">
                                    <h4>Portfolio</h4>
                                    <ul className="well portfolio">
                                        <li className=" portfolio-asset">

                                            <span className="assetbrief">
                                                <p>Asset</p>
                                                <p>Symbol</p>
                                                <p>Price</p>
                                                <p>Number</p>
                                                <p>Value</p>
                                            </span></li>
                                        <li >
                                            <div className={this.state.expand ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                <span className="assetbrief">
                                                    <h6>Total Petroleum Ghana</h6>
                                                    <p>TOTAL</p>
                                                    <p>₵4.60</p>
                                                    <p>2.4%</p>
                                                    <p>5</p>
                                                    <p>23</p>
                                                </span>
                                                <span className="fas fa-line"></span>
                                            </div>
                                        </li>
                                        <li >
                                            <div className={this.state.expand ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                <span className="assetbrief">
                                                    <h6>Societe Generale Ghana</h6>
                                                    <p>SOGEGH</p>
                                                    <p>₵0.98</p>
                                                    <p>1.2%</p>
                                                    <p>8</p>
                                                    <p>₵7.84</p>
                                                </span>
                                                <span className="fas fa-line"></span>
                                            </div>
                                        </li>
                                        <li >
                                            <div className={this.state.expand ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                <span className="assetbrief">
                                                    <h6>Trust Bank</h6>
                                                    <p>TBL</p>
                                                    <p>₵0.26</p>
                                                    <p>0.37%</p>
                                                    <p>12</p>
                                                    <p>₵50</p>
                                                </span>
                                                <span className="fas fa-line"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="profile" className="col-md-3">
                                <div className="otherinfo">
                                    <div className="well profile">
                                        <div className=""></div>
                                    </div>
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
