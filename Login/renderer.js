import react from "react";
import reactDOM from "react-dom";

class Login extends React.Component {
	constructor(props){
		super();
		this.state ={};
	}

	render(){
		return(<div>Hello World</div>
			);
	}
}

reactDOM.render(<Login/>,document.getElementByID("root"))