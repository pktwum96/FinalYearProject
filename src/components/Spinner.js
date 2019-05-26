import React from 'react';
import './Spinners.css';


class Spinner extends React.Component {
    render () {
        return (
            <div id="overlay1">
                <div className="d-flex spinner-content">
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8">hi</div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Spinner;
