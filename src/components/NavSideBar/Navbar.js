import React from 'react';
import './styles/NavSideBar.css';
import {Link} from 'react-router-dom';



class Navbar extends React.Component {


    render() {
        return (

            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="sidebartoggler" onClick={this.props.toggleSidebar}><i className="fas fa-th"></i></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <button className="btn p-0" data-target="#contactUs" data-toggle="modal"><i className="far fa-envelope"></i></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn p-0"><i className="far fa-question-circle"></i></button>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="far fa-user-circle"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="dashboard">Portfolio</Link>
                                <Link className="dropdown-item" to="/">Wallet</Link>
                                <Link to="login" className="dropdown-item">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;