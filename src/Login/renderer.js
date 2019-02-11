import React from "react";
import "./renderer.css";
import LoginBox from './LoginBox.js';
import RegisterBox from './RegisterBox.js';


 class Login extends React.Component {
	constructor(props){
		super();
		this.state ={isLoginOpen: true, isRegisterBoxOpen: false};
	}

	showLoginBox(e){
		this.setState({isLoginOpen:true,isRegisterBoxOpen:false});
	}

	showRegisterBox(e){
		this.setState({isLoginOpen:false,isRegisterBoxOpen:true});
	}

	render(){
		return(
			<div className="root-container">
				<div className="box-controller">
					<div className="controller" onClick={this.showLoginBox.bind(this)}>
						Login
					</div>
					<div className="controller" onClick={this.showRegisterBox.bind(this)}>
						Register
					</div>
				</div>


				<div className="box-container">

					{this.state.isLoginOpen && <LoginBox/>}
					{this.state.isRegisterBoxOpen && <RegisterBox/>}

				</div>
			</div>
			);
	}
}
export default Login;

