import React from "react";
import "./renderer.css";


 class LoginBox extends React.Component {
	constructor(props){
		super(props);
		this.state ={};
	}

	submitLogin(e){
		
	}

	render(){
		return(

			<div className="inner-container">

				<div className="header">
					Login
				</div>
			
				<div className="box">
			
					<div className="input-group">
			
						<input type="text" name="username" className="login-input" placeholder="Username"/>	
			
					</div>


					<div className="input-group">
			
						<input type="password" name="password" className="login-input" placeholder="Password"/>	
			
					</div>

					<button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Sign In</button>

			
				</div>
			
			</div>
			);
	}
}
export default LoginBox;