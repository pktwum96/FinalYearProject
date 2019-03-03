import React from 'react';
import '../styles/Dashboard.css';

class Profile extends React.Component {
    render() {
        return (<div className="otherinfo">
            <div className="well profile">
                <div className="userimage"><i className="far fa-user-circle"></i></div>
                <h6>Risk Profile: <span>Enterprising</span></h6>
                <p>Lorem Ipsum dolor amet in this corenrt cn sjkn shb ksdb</p>
                <table>
                    <tr>
                        <td>Portfolios</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Assets</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Ipsum</td>
                        <td>True</td>
                    </tr>
                </table>
            </div>
        </div>
        );
    }
}

export default Profile;
