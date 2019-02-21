import React, { Component } from 'react';
import '../styles/Dashboard.css';





class Dashboard extends Component {

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
      <div>
        <div className={this.state.active ? "d-flex toggled active" : "d-flex"} id="wrapper" >

          {/* Sidebar */}
          <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">iPortfolio</div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action bg-dark">
                <i class="material-icons" >poll</i>
                <h5>Dashboard</h5>
              </a>
              <a href="#" className="list-group-item list-group-item-action bg-dark">
                <i class="material-icons" >work</i>
                <h5>Assessment</h5>
              </a>
              <a href="#" className="list-group-item list-group-item-action bg-dark">
                <i class="material-icons">account_balance_wallet</i>
                <h5>Invest</h5>
              </a>
              <a href="#" className="list-group-item list-group-item-action bg-dark">
                <i class="material-icons" >school</i>
                <h5>Learn</h5>
              </a>
            </div>
          </div>
          {/* /#sidebar-wrapper */}

          {/* Page Content */}
          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                      <a className="dropdown-item" href="#">Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="container-fluid">
            </div>
          </div>
          {/* /#page-content-wrapper */}

        </div>
        {/* /#wrapper */}


      </div>
    );
  }
}

export default Dashboard;
