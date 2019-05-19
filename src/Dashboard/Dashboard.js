import React from 'react';
import './styles/Dashboard.css'
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Barchart from '../components/Barchart.js';
import Doughnutchart from '../components/Doughnut.js';
import Linechart from '../components/Linechart.js';
import Profile from '../components/Profile.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSideBar} from '../_shared/actions/index';



class Dashboard extends React.Component {


    render() {
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
                                                        <i className="fas fa-caret-up"></i>
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
                                        <table className="well portfolio">
                                            <thead>
                           <tr className=" portfolio-asset">
                                                    <th>Asset Type</th>
                                                    <th>Asset</th>
                                                    <th className="d-none d-lg-table-cell">Symbol</th>
                                                    <th className="d-none d-lg-table-cell">Price</th>
                                                    <th>% Change</th>
                                                    <th className="d-none d-lg-table-cell">Number</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className={true ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                    <td>Stock</td>
                                                    <td>Total Petroleum Ghana</td>
                                                    <td className="d-none d-lg-table-cell">TOTAL</td>
                                                    <td className="d-none d-lg-table-cell">₵4.60</td>
                                                    <td>2.43%</td>
                                                    <td className="d-none d-lg-table-cell">5</td>
                                                    <td>₵23.00</td>

                                                </tr>
                                                <tr className={true ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                    <td>Stock</td>
                                                    <td>Societe Generale Ghana</td>
                                                    <td className="d-none d-lg-table-cell">SOGEGH</td>
                                                    <td className="d-none d-lg-table-cell">₵0.98</td>
                                                    <td>1.20%</td>
                                                    <td className="d-none d-lg-table-cell">8</td>
                                                    <td>₵7.84</td>
                                                </tr>

                                                <tr className={true ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={this.expandDiv}>
                                                    <td>Stock</td>
                                                    <td>Trust Bank</td>
                                                    <td className="d-none d-lg-table-cell">TBL</td>
                                                    <td className="d-none d-lg-table-cell">₵0.26</td>
                                                    <td>0.37%</td>
                                                    <td className="d-none d-lg-table-cell">12</td>
                                                    <td>₵50.00</td>
                                                </tr>
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
        sidebarMode: state.sidebarMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({toggleSideBar},dispatch)
}

export default Dashboard;
