import React from 'react';
import '../styles/NavSideBar.css';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="bg-dark border-right" id="sidebar-wrapper">
                <div id="sticky">
                    <div className="sidebar-heading"><i className="fas fa-info-circle"></i></div>

                    <div className="list-group list-group-flush">
                        <ul className="nav nav-tabs">

                            <li className="active">
                                <Link to="dashboard" className="list-group-item list-group-item-action bg-dark">
                                    <i className="fas fa-chart-line"></i>
                                    <h5>Dashboard</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to="assessment" className="list-group-item list-group-item-action bg-dark">
                                    <i className="fas fa-info-circle"></i>
                                    <h5>Assessment</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to="invest" className="list-group-item list-group-item-action bg-dark">
                                    <i className="far fa-money-bill-alt"></i>
                                    <h5>Invest</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to="learn" className="list-group-item list-group-item-action bg-dark">
                                    <i className="fas fa-graduation-cap"></i>
                                    <h5>Learn</h5>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
