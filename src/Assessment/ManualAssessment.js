import React from 'react';
import ManualQuestionnaire from '../components/ManualQuestionnaire';


class ManualAssessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                        <h3>Risk Profile Assessment</h3>
                        <ManualQuestionnaire/>
            </React.Fragment>
        );
    }
}


export default ManualAssessment;
