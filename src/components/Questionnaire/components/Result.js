import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
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
        {props.quizResult === "Defensive" ?

            <React.Fragment>
                <h4>You are a <strong>Defensive Investor</strong></h4>
                <h6>You are a conservative risk taker and therefore more likely to be more comfortable investing in debt-based instruments where risk level is minimal. You are less likely to lose a lot even though it comes with low returns</h6>
            </React.Fragment>

             : props.quizResult === "SemiDefensive" ?

             <React.Fragment>
                 <h4>You are a <strong>Semi-Densive Investor</strong></h4>
                 <h6>Haha</h6>
             </React.Fragment>

            : props.quizResult === "Moderate" ?

            <React.Fragment>
                <h4>You are a <strong>Moderate Investor</strong></h4>
            </React.Fragment>

            : props.quizResult === "SemiEnterprising" ?

            <React.Fragment>
                <h4>You are a <strong>Semi-Enterprising Investor</strong></h4>
            </React.Fragment>

            : props.quizResult === "Enterprising" ?

            <React.Fragment>
                <h4>You are an <strong>Enterprising Investor</strong></h4>
            </React.Fragment>

            : (console.log("Error"))

         }
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
