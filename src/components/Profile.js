import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
    render() {
        const user= this.props.userData;

        return (<div className="otherinfo">
            <div className="well profile">
                <div className="userimage"><i className="far fa-user-circle"></i></div>
                <h6>Risk Profile: <span>{user.riskProfile}</span></h6>
                <p>{user.riskInfo}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Portfolios</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Assets</td>
                            <td>{user.portfolios.assets.length}</td>
                        </tr>
                        <tr>
                            <td>Current Value</td>
                            <td>{user.portfolios.currentValue}</td>
                        </tr>
                        <tr>
                            <td>Expected Value</td>
                            <td>{user.portfolios.expectedValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

const mapStateToProps =(state) => {
    return {
        userData: state.user.userData
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
