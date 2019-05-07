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

                <h2>You are defesnsibe</h2>

             : props.quizResult === "SemiDefensive" ?

                <h2>You are Defensive semi</h2>

            : props.quizResult === "Moderate" ?

                <h2>YOu are moderate </h2>

            : props.quizResult === "SemiEnterprising" ?

                <h2>Semi-ENter</h2>

            : props.quizResult === "Enterprising" ?

                <h2>Enter</h2>

            : (console.log("Error"))

         }
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
