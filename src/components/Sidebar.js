import React from 'react';
import '../styles/NavSideBar.css';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="bg-dark border-right" id="sidebar-wrapper">
                <div id="sticky">
                    <div className="sidebar-heading"><i class="fas fa-info-circle"></i></div>

                    <div className="list-group list-group-flush">
                        <ul className="nav nav-tabs">

                            <li className="active">
                                <a href="/dashboard" className="list-group-item list-group-item-action bg-dark">
                                    <i class="fas fa-chart-line"></i>
                                    <h5>Dashboard</h5>
                                </a>
                            </li>

                            <li>
                                <a href="/assessment" className="list-group-item list-group-item-action bg-dark">
                                    <i class="fas fa-info-circle"></i>
                                    <h5>Assessment</h5>
                                </a>
                            </li>

                            <li>
                                <a href="/invest" className="list-group-item list-group-item-action bg-dark">
                                    <i class="fas fa-money-bill-alt"></i>
                                    <h5>Invest</h5>
                                </a>
                            </li>

                            <li>
                                <a href="/learn" className="list-group-item list-group-item-action bg-dark">
                                    <i class="fas fa-graduation-cap"></i>
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
