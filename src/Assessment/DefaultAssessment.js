import React from 'react';

class DefaultAssessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h2>Assessment</h2>
                    <div className="d-flex">
                        <button className="btn btn-outline-primary mx-auto" onClick={()=>this.props.openManual()}>Manual Select</button>
                        <button className="btn btn-outline-success mx-auto" onClick={()=>this.props.openAuto()}>Take Test</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default DefaultAssessment;
