import React from 'react';
import {Link} from 'react-router-dom';

class NewModal extends React.Component {


	render() {

		return (
			<div id="NewInvestor" className="modal-backdrop fade show my-auto" tabIndex="1" role="dialog">
				<div className="modal-dialog modal-xl newUser" role="document">
					<div className="modal-content text-center">
						<div className="p-4">
							<h2>Awesome!</h2>
							<br/>
							<h6>
								<br/>Now that we've determined your risk profile, we can now start investing.<br/>
								<br/>Click on the link below to start <br/>
							</h6>
							<div className="d-flex py-3">
								<Link to="invest" className="mx-auto"><button className="btn btn-outline-success">Let's Go</button></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default NewModal;
