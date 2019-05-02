import React from 'react';
import {Link} from 'react-router-dom';
import errorFour from '../img/error404.svg';
import './styles/Default.css';

class Default extends React.Component{

    render() {
        return (
            <div id="Default">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-tile text-uppercase pt-5">
                            <img src={errorFour} className="default-img" alt="error 404"/>
                            <h3>the requested URl<span className="text-danger">{this.props.location.pathname}</span> {" "}was not found</h3>
                            <button className="btn btn-outline-primary"><Link to="/">Back to home</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Default;
