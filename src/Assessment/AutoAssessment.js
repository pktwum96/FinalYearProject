import React from 'react';
import AutoQuestionnaire from '../components/AutoQuestionnaire';


class AutoAssessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                        <h3>Risk Profile Assessment</h3>
						<span className="d-flex">
							<button className="btn btn-outline-danger mr-auto" onClick={()=>this.props.openDefault()}>
								<i className="fas fa-arrow-left"></i>
								Back
							</button>
						</span>
                        <AutoQuestionnaire/>
            </React.Fragment>
        );
    }
}



export default AutoAssessment;
