import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Start extends Component {
    render() {
        return (
            <div>
                <h3>Signs and Symptoms</h3>
                <div className="ui grid">
                    <div className="column">
                        <Link className="ui button primary" to="/fever">Fever (at least 38°C and an increase of 1°C from baseline) and/or Shaking Chills/Rigors </Link>
                    </div>
                </div>
                <div className="ui  grid">
                    <div className="column">
                        <Link className="ui button primary" to="/uticaria">Urticaria (hives), Itching or Rash</Link>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="column">
                        <Link className="ui button primary" to="/dyspnea">Dyspnea or Decrease in SpO<sub>2</sub>%</Link>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="column">
                        <Link className="ui button primary" to="/timing/all">All of the Above</Link>
                    </div>
                </div>



                <hr/>
                <Link className="button secondary ui " to="/"> Home</Link>
                <button className="button ui primary" onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default Start