import React from "react";
import "./nav.css";


 class Nav extends React.Component {

	constructor(){
		super();
	}
	render(){
		return(
			<div id="nav-bar">
				<nav className="navbar navbar-expand-lg navbar-light ">
				  <a className="navbar-brand" href="#">iPortfolio</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Services</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">How It Works</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Login</a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		);
	}

}
export default Nav;
