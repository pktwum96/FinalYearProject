import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import {ProductConsumer} from './context.js';
import Profile from './Profile.js';
import '../styles/Learn.css';
import Videolist from './VideoList.js'


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
                        <div className="row">
                            <div className="col-md-9 px-0"id="LearnPage">
                                <div className="well videolist">
                                    <ProductConsumer>
                                        {(value)=>{
                                            return value.video.map(video => {
                                                return <Videolist key={video.id} video={video}/>
                                            })
                                        }}
                                    </ProductConsumer>
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

export default Learn;
