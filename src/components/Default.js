import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import errorFour from '../img/error404.svg';
import '../styles/Default.css';

class Default extends React.Component{

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
            <div id="Default">
            <div id="wrapper" className={this.state.active ? "d-flex toggled active" : "d-flex"}>
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar changeClass={this.changeClass}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-tile text-uppercase pt-5">
                                <img src={errorFour} className="default-img"/>
                                <h3>the requested URl<span className="text-danger">{this.props.location.pathname}</span> {" "}was not found</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Default;
