import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

class Default extends React.Component{

    constructor (){
        super();
        this.state = {
            active:false
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
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-tile text-uppercase pt-5">
                                <h1 className="display-3">404</h1>
                                <h1>error</h1>
                                <h2>page not found</h2>
                                <h3>the requested URl<span className="text-danger">{this.props.location.pathname}</span> {" "}was not found</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Default;
