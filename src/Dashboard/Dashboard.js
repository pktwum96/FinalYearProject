import React from 'react';
import './styles/Dashboard.css'
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Barchart from '../components/Barchart.js';
import Doughnutchart from '../components/Doughnut.js';
import Linechart from '../components/Linechart.js';
import Profile from '../components/Profile.js';
import { connect } from 'react-redux';
import {toggleSideBar} from '../_shared/actions/index';
import AssetList from '../_shared/container/AssetList.js';



class Dashboard extends React.Component {


    render() {
        const user=this.props.userData;
        console.log(user);
        return (
            <React.Fragment>
                <div id="wrapper" className={this.props.sidebarMode ? "d-flex toggled active" : "d-flex"}>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navbar toggleSideBar={this.props.toggleSideBar} page="Dashboard"/>
                        <div className="container-fluid ">
                            <div className="row" id="Dashboard">
                                <div id="maindisplay" className="col-md-9">
                                    <div className="Stats">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="well">
                                                    <h2>₵ {user.portfolios.initialDeposit}</h2>
                                                    <p>Initial Deposit</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="well">
                                                    <h2>₵ {user.portfolios.currentValue}</h2>
                                                    <p>Current Value</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="well">
                                                    <span id="inLine">
                                                        <i className={user.portfolios.change>0?"fas fa-caret-up":"fas fa-caret-down"}></i>
                                                        <h2>{user.portfolios.change} %</h2>
                                                    </span>
                                                    <p>Change</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="well">
                                                    <h2>₵ {user.portfolios.expectedValue}</h2>
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
                                                    <p>₵{user.portfolios.currentValue} of ₵{user.portfolios.expectedValue}</p>
                                                </div>
                                                <div className="well">
                                                    <h4>Time Passed</h4>
                                                    <div className="progress">
                                                        <div className="progress-bar forty" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                            45%
                                                        </div>
                                                    </div>
                                                    <p>Day {user.portfolios.daysDone} of {user.portfolios.totalDays}</p>
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
                                                    <h1>{user.portfolios.assets.length} </h1>
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
                                        <table className="well portfolio">
                                            <thead>
                                                <tr className=" portfolio-asset">
                                                    <th>Asset Type</th>
                                                    <th>Asset</th>
                                                    <th className="d-none d-lg-table-cell">Symbol</th>
                                                    <th className="d-none d-lg-table-cell">Price</th>
                                                    <th>% Change</th>
                                                    <th className="d-none d-lg-table-cell">Quantity</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <AssetList/>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="profile" className="col-md-3">
                                    <Profile/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps =(state) => {
    return {
        sidebarMode: state.sidebar.sidebarMode,
        userData: state.user.userData
    }
}

const mapDispatchToProps = {
    toggleSideBar
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
