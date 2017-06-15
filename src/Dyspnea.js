import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
    <div>
        <h1>Dyspnea</h1>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/6">Typically with hypertension</Link>
            </div>
        </div>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/7">No significant change in blood pressure OR with hypotension</Link>
            </div>
        </div>
        <hr/>
        <Link className="ui button secondary" to="/">Home</Link>
        <button className="ui button primary" onClick={props.history.goBack}>Back</button>
    </div>
)