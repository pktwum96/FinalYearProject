import React from 'react';

class DefaultInvest extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h2>Invest</h2>
                    <div className="d-flex">
                        <button className="btn btn-outline-primary mx-auto" onClick={()=>this.props.openManual()}>Manually Invest</button>
                        <button className="btn btn-outline-success mx-auto" onClick={()=>this.props.openAuto()}>Generate Portfolio</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default DefaultInvest;
