import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Profile from '../components/Profile.js';
import { connect } from 'react-redux';
import {toggleSideBar} from '../_shared/actions/index';
import {bindActionCreators} from 'redux';
import AutoAssessment from './AutoAssessment';
import ManualAssessment from './ManualAssessment';
import DefaultAssessment from './DefaultAssessment';


class Assessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDefaultOpen:true,
            isManualOpen: false,
            isAutoOpen: false
        };

        this.openAuto =this.openAuto.bind(this)
        this.openManual =this.openManual.bind(this)
        this.openDefault =this.openDefault.bind(this)
    }

    openManual () {
        this.setState({
            isDefaultOpen:false,
            isManualOpen: true,
            isAutoOpen: false
        })
    }

    openAuto() {
        this.setState({
            isDefaultOpen:false,
            isManualOpen: false,
            isAutoOpen: true
        })
    }

    openDefault(){
        this.setState({
            isDefaultOpen:true,
            isManualOpen: false,
            isAutoOpen: false
        })
    }

    render() {
        const user=this.props.userData;

        return (
            <React.Fragment>
                <div id="wrapper" className={this.props.sidebarMode ? "d-flex toggled active" : "d-flex"}>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navbar toggleSideBar={this.props.toggleSideBar}/>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className={"px-0 col-md-" + (!user.riskProfile  ?  "12" : "9")} id="Assessment">
                                    <div className="mx-auto my-3 well">
                                        {this.state.isDefaultOpen && <DefaultAssessment openManual={this.openManual} openAuto={this.openAuto}/>}
                                        {this.state.isManualOpen && <ManualAssessment openDefault={this.openDefault}/>}
                                        {this.state.isAutoOpen && <AutoAssessment openDefault={this.openDefault}/>}
                                    </div>
                                </div>
                            {!user.riskProfile  ?
                                <div></div>
                                :
                                <div className="col-md-3 px-0">
                                    <Profile/>
                                </div>
                            }

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
        sidebarMode: state.sidebar.sidebarMode,
        userData: state.user.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({toggleSideBar},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Assessment);
