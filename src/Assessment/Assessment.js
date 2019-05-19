import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Profile from '../components/Profile.js';
import Questionnaire from '../components/Questionnaire';
import { connect } from 'react-redux';
import {toggleSideBar} from '../_shared/actions/index';
import {bindActionCreators} from 'redux';


class Assessment extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="wrapper" className={this.props.sidebarMode ? "d-flex toggled active" : "d-flex"}>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navbar toggleSidebar={this.props.toggleSidebar}/>
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
            </React.Fragment>
        );
    }
}


const mapStateToProps =(state) => {
    return {
        sidebarMode: state.sidebar.sidebarMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({toggleSideBar},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Assessment);
