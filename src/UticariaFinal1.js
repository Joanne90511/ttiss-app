import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
    <div>
        <h2>Usual Timing</h2>
        <p>During or up to 4 hours post transfusion
        </p>
        <h2>
            Possible Etiology
        </h2>
        <ul>
            <li>Febrile non-hemolytic transfusion reaction</li>
        </ul>
        <hr/>
        <Link className="btn btn-primary" to="/">Home</Link>
        <button className="btn btn-primary" onClick={props.history.goBack}>Back</button>
    </div>
)