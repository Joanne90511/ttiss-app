import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
    <div>
        <h1>Uticaria</h1>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/3">Less than 2/3 body. NO dyspnea, hypotension or other serious symptoms</Link>
            </div>
        </div>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/4">2/3 body or more but NO other serious symptoms</Link>
            </div>
        </div>
        <div className="ui grid">
            <div className="column">
                <Link className="ui button primary" to="/timing/5">Accompanied by serious symptoms</Link>
            </div>
        </div>
        <hr/>
        <Link className="ui button secondary" to="/">Home</Link>
        <button className="ui button primary" onClick={props.history.goBack}>Back</button>
    </div>
)