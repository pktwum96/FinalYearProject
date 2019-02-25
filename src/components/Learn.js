import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';


class Learn extends React.Component {

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
                    <div className="container-fluid ">

                        <h1>Learn</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Learn;
