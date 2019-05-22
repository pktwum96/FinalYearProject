import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Profile from '../components/Profile.js';
import './styles/Invest.css';
import { connect } from 'react-redux';
import { toggleSideBar } from '../_shared/actions/index';
import DefaultInvest from './DefaultInvest';
import AutoInvest from './AutoInvest';
import ManualInvest from './ManualInvest';
import NewModal from '../Dashboard/NewModal';

class Invest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDefaultOpen:true,
            isManualOpen: false,
            isAutoOpen: false
        };

        this.openAuto =this.openAuto.bind(this)
        this.openManual =this.openManual.bind(this)
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
                                <div className={"px-0 col-md-" + (user.riskProfile==="" ?  "12" : "9")} id="Invest">
                                    <div className="mx-auto my-3 well">
                                        {user.riskProfile==="" || user.riskProfile==="Inconclusive" ? <NewModal/>  :(this.state.isDefaultOpen && <DefaultInvest openManual={this.openManual} openAuto={this.openAuto}/>)}
                                        {this.state.isManualOpen && <ManualInvest/>}
                                        {this.state.isAutoOpen && <AutoInvest/>}
                                    </div>
                                </div>
                            {user.riskProfile==="" ?
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

const mapStateToProps = state => {
	return {
		sidebarMode: state.sidebar.sidebarMode,
		cart: state.investmentAsset.cart,
        userData: state.user.userData
	};
};

const mapDispatchToProps = {
	toggleSideBar
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Invest);
