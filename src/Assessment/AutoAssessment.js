import React from 'react';
import AutoQuestionnaire from '../components/AutoQuestionnaire';


class AutoAssessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                        <h3>Risk Profile Assessment</h3>
                        <AutoQuestionnaire/>
            </React.Fragment>
        );
    }
}



export default AutoAssessment;
