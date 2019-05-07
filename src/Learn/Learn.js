import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import {ProductConsumer} from '../components/context.js';
import Profile from '../components/Profile.js';
import './styles/Learn.css';
import Videolist from './VideoList.js'


class Learn extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    return  (
                        <React.Fragment>
                            <div id="wrapper" className={value.active ? "d-flex toggled active" : "d-flex"}>
                                <Sidebar/>
                                <div id="page-content-wrapper">
                                    <Navbar toggleSidebar={value.toggleSidebar}/>
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
                        </React.Fragment>
                    )
                }}

            </ProductConsumer>
        );
    }
}


export default Learn;
