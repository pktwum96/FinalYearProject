import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {setRisk} from '../../../_shared/actions';
import {Link} from 'react-router-dom';

function Result(props) {

    const resultProfile = {
        profile:"",
        info:""
    }

    return (
        <CSSTransitionGroup
            className="container-questionnaire result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
            >
        <div>
            {(() => {
                switch (props.quizResult) {
                    case "Defensive":
                        resultProfile.profile = "Defensive";
                        resultProfile.info ="You are a conservative risk-taker and therefore more likely to be more comfortable investing in debt-based instruments where risk level is minimal. You are less likely to lose a lot even though it comes with low returns";
                        break;

                    case "SemiDefensive":
                        resultProfile.profile = "Semi-Defensive";
                        resultProfile.info = "You are a slightly conservative risk-taker and therefore more likely to be more comfortable investing in debt-based instruments where risk level is minimal. You are less likely to lose a lot even though it comes with low returns. Optimum debt/equity allocation is 65% debt to 35% equity";
                        break;

                    case "Moderate":
                        resultProfile.profile = "Moderate";
                        resultProfile.info = "You are a moderate risk-taker and therefore are comfortable investing in both debt-based instruments where risk level is minimal and stock-based assets with high return. You are less likely to lose a lot and returns are moderate. Optimum debt/equity allocation is 50% debt to 50% equity";
                        break;

                    case "SemiEnterprising":
                        resultProfile.profile = "Semi-Enterprising";
                        resultProfile.info = "You are a slightly higher risk-taker and therefore are comfortable investing in both debt-based instruments where risk level is minimal and stock-based assets with high return. Returns ar slightly higher than average. Optimum debt/equity allocation is 35% debt to 65% equity";
                        break;

                    case "Enterprising":
                        resultProfile.profile = "Enterprising";
                        resultProfile.info = "You are a more adventurous risk-taker and therefore are comfortable investing in high-yield euity instruments where risk level is high. Profits may be high. Optimum debt/equity allocation is 20% debt to 80% equity";
                        break;
                    default:
                        resultProfile.profile = "Inconclusive";
                        resultProfile.info = "Please retake test";
                        console.log("error");
                }
            })()}


            {
                    (resultProfile.profile==="Inconclusive") ?
                    <React.Fragment>
                        <h4>{resultProfile.profile}</h4>
                        <h6>{resultProfile.info}</h6>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <h4>You are a <strong>{resultProfile.profile}</strong> Investor</h4>
                        <h6>{resultProfile.info}</h6>
                    </React.Fragment>

            }

            <div className="d-flex">
                <Link to="assessment" className="mx-auto"><button className="btn btn-outline-secondary" onClick={()=>window.location.reload()}><i className="fas fa-pen"></i> Retake Test</button></Link>
                <Link to="dashboard" className="mx-auto"><button className="btn btn-outline-success" onClick={()=>props.setRisk(resultProfile.profile,resultProfile.info)}>Submit Result</button></Link>
            </div>
        </div>
        </CSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired
};

const mapStateToProps =(state) => {
    return {
    }
}

const mapDispatchToProps = {
    setRisk
}

export default connect(mapStateToProps,mapDispatchToProps)(Result);
