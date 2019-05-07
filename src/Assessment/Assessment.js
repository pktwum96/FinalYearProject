import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Profile from '../components/Profile.js';
import AssessmentQuestions from './AssessmentQuestions.js';
import {ProductConsumer} from '../components/context.js';
import Questionnaire from '../components/Questionnaire';


class Assessment extends React.Component {

    constructor (){
        super();
        this.state = {

            active:true
        }
        this.changeClass = e => {
            e.preventDefault();
            this.setState({active: !this.state.active})
        }
    }

    render() {
        return (
            <div id="wrapper" className={this.state.active ? "d-flex toggled active" : "d-flex"}>
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar changeClass={this.changeClass}/>
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-md-9 px-0" id="Assessment">
                                <div className="mx-auto my-3 well">
                                    <h3>Risk Profile Assessment</h3>
                                    <Questionnaire/>
                                </div>
                            </div>
                            <div className="col-md-3 px-0">
                                <Profile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assessment;
