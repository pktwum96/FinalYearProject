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
            {(() => {
                switch (props.quizResult) {
                    case "Defensive":
                        resultProfile.profile = "Defensive";
                        resultProfile.info ="You are a conservative risk taker and therefore more likely to be more comfortable investing in debt-based instruments where risk level is minimal. You are less likely to lose a lot even though it comes with low returns";
                        break;

                    case "SemiDefensive":
                        resultProfile.profile = "Semi-Defensive";
                        resultProfile.info = "tramol";
                        break;

                    case "Moderate":
                        resultProfile.profile = "Moderate";
                        resultProfile.info ="here";
                        break;

                    case "SemiEnterprising":
                        resultProfile.profile = "Semi-Enterprising";
                        resultProfile.info = "god";
                        break;

                    case "Enterprising":
                        resultProfile.profile = "Enterprising";
                        resultProfile.info = "hit";
                        break;
                    default:
                    (console.log("Error"))
                }
            })()}
            <h4>You are a <strong>{resultProfile.profile}</strong> Investor</h4>
            <h6>{resultProfile.info}</h6>

            <div className="d-flex">
                <Link to="assessment" className="mx-auto"><button className="btn btn-outline-secondary" onClick={()=>window.location.reload()}><i className="fas fa-pen"></i> Retake Test</button></Link>
                <Link to="dashboard" className="mx-auto"><button className="btn btn-outline-success" onClick={()=>props.setRisk(resultProfile.profile,resultProfile.info)}>Submit Result</button></Link>
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
