import React from 'react';
import Profile from '../components/Profile.js';
import Questionnaire from '../components/Questionnaire';


class AutoAssessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                        <h3>Risk Profile Assessment</h3>
                        <Questionnaire/>
            </React.Fragment>
        );
    }
}



export default AutoAssessment;
