import React from "react";
import "./nav.css";
import { Link, animateScroll as scroll } from "react-scroll";


 class Nav extends React.Component {

	constructor(){
		super();
	}
	render(){
		return(
			<div id="nav-bar">
				<nav className="navbar navbar-expand-lg navbar-light ">
				  <a className="navbar-brand" href="#"><Link to="Home" smooth={true} offset={-50}>iPortfolio</Link></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#"><Link to="Home" smooth={true} offset={-50}>Home</Link></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#"><Link to="Services" smooth={true} offset={-50}>Services</Link></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#"><Link to="HowItWorks" smooth={true} offset={-50}>How It Works</Link></a>
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
