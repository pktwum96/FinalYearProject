import React from 'react';
import {Link} from 'react-router-dom';

class NewModal extends React.Component {


	render() {

		return (
			<div id="NewModal" className="modal-backdrop fade show my-auto" tabIndex="1" role="dialog">
				<div className="modal-dialog modal-xl newUser" role="document">
					<div className="modal-content text-center">
						<div className="p-4">
							<h2>Welcome!</h2>
							<br/>
							<h6>
								<br/>Let's get you started with using iPortfolio.<br/>
								<br/>Before that we would need to determine your risk profile. <br/>
								<br/>If you already know your risk appetite, click Manually select. Otherwise, let us help you determine your risk profile by taking the test below
							</h6>
							<div className="d-flex py-3">
								<Link to="assessment" className="mx-auto"><button className="btn btn-outline-success">Let's Go</button></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default NewModal;
