import React from "react";
import "./renderer.css";


 class RegisterBox extends React.Component {
	constructor(props){
		super(props);
		this.state ={};
	}

	submitRegister(e){
	}

	render(){
		return(

			<div className="inner-container">
				<div className="header">
					Register
				</div>
				<div className="box">
			
					<div className="input-group">
			
						<input type="text" name="username" className="login-input" placeholder="Username"/>	
			
					</div>
			
					<div className="input-group">
			
						<input type="text" name="email" className="login-input" placeholder="Email"/>	
			
					</div>
			
					<div className="input-group">
			
						<input type="password" name="password" className="login-input" placeholder="Password"/>	
			
					</div>

					<button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>

			
				</div>
			
			</div>
			);
	}
}
export default RegisterBox;