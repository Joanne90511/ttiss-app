import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return (
            <div>
                <h2>Immediate Actions</h2>
                <ol>
                    <li>STOP the transfusion</li>
                    <li>Maintain IV Access</li>
                    <li>Check vital Signs</li>
                    <li>Re-Check patient ID Band and Product Label</li>
                    <li>Notify Physician</li>
                    <li>Notify Transfusion Laboratory</li>
                </ol>
                <Link className="button primary ui" to="/start"> Start</Link>
            </div>

        )
    }
}

export default Home;