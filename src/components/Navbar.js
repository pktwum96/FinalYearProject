import React from 'react';
import '../styles/NavSideBar.css';


class Navbar extends React.Component {


    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="sidebartoggler" onClick={this.props.changeClass}><i className="material-icons">apps</i></div>
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

        );
    }
}

export default Navbar;
