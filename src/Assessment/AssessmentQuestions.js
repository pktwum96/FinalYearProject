import React from 'react'

class AssessmentQuestions extends React.Component
{
    render ()
    {
        const {id,question,possibleAnswers}=this.props.investmentQuestions;

        return (
            <div className="well">
                <h6 className="p-4">{question}</h6>
                    <p className="well">a. {possibleAnswers[0][0]}</p>
                    <p className="well">b. {possibleAnswers[1][0]}</p>
                    <p className="well">c. {possibleAnswers[2][0]}</p>
                    <p className="well">d. {possibleAnswers[3][0]}</p>
            </div>
        )
    }
}


export default AssessmentQuestions;
