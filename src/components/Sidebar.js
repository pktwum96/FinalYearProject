import React from 'react';
import '../styles/NavSideBar.css';


class Sidebar extends React.Component {

    render() {
        return (
            <div className="bg-dark border-right" id="sidebar-wrapper">
                <div id="stcky">
                    <div className="sidebar-heading"><h2>i</h2></div>

                    <div className="list-group list-group-flush">
                        <ul className="nav nav-tabs">

                            <li className="active">
                                <a href="/dashboard" className="list-group-item list-group-item-action bg-dark">
                                    <i class="material-icons" >poll</i>
                                    <h5>Dashboard</h5>
                                </a>
                            </li>

                            <li>
                                <a href="/assessment" className="list-group-item list-group-item-action bg-dark">
                                    <i class="material-icons" >work</i>
                                    <h5>Assessment</h5>
                                </a>
                            </li>

                            <li>
                                <a href="/invest" className="list-group-item list-group-item-action bg-dark">
                                    <i class="material-icons">account_balance_wallet</i>
                                    <h5>Invest</h5>
                                    <span className="triangle-left"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/learn" className="list-group-item list-group-item-action bg-dark">
                                    <i class="material-icons" >school</i>
                                    <h5>Learn</h5>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
