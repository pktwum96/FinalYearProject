import React from 'react';
import AutoInvestModal from './AutoInvestModal';

class DefaultInvest extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h2>Invest</h2>
                    <h6 className="my-4">Select one of the following to begin investing</h6>
                    <div className="d-flex">
                        <button className="btn btn-outline-primary mx-auto" onClick={()=>this.props.openManual()}>Manually Invest</button>
                        <button className="btn btn-outline-success mx-auto"  data-target="#AutoInvestModal" data-toggle="modal">Generate Portfolio</button>
                    </div>
                </div>
                <AutoInvestModal openAuto={()=>this.props.openAuto()}/>
            </React.Fragment>
        );
    }
}


export default DefaultInvest;
