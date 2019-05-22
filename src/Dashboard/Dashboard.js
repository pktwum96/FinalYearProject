import React from 'react';
import './styles/Dashboard.css'
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import { connect } from 'react-redux';
import {toggleSideBar} from '../_shared/actions/index';
import NewModal from './NewModal.js';
import NewInvestor from './NewInvestor.js';
import UserDashboard from './UserDashboard.js';



class Dashboard extends React.Component {


    render() {
        const user=this.props.userData;
        return (
            <React.Fragment>
                <div id="wrapper" className={this.props.sidebarMode ? "d-flex toggled active" : "d-flex"}>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navbar toggleSideBar={this.props.toggleSideBar} page="Dashboard"/>
                        <div className="container-fluid ">
                            {user.riskProfile==="" || user.riskProfile==="Inconclusive" ? <NewModal/> :user.portfolios.assets.length===0? <NewInvestor/>:<UserDashboard/>}
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

const mapDispatchToProps = {
    toggleSideBar
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
