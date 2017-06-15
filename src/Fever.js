import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
    <div>
        <h1>Fever</h1>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/1">38°C to 38.9°C, NO rigors dyspnea, hypotension or other serious symptoms</Link>
            </div>
        </div>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/2">39°C or more OR Less than 39°C but with other serious symptoms</Link>
            </div>
        </div>
        <hr/>
        <Link className="ui button secondary" to="/">Home</Link>
        <button className="ui button primary" onClick={props.history.goBack}>Back</button>

    </div>
)