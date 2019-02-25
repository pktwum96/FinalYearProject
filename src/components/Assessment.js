import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';


class Assessment extends React.Component {
    render() {
        return (
            <div id="wrapper" className="d-flex toggled active">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar/>
                    <div className="container-fluid ">

                        <h1>Assessment</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assessment;
