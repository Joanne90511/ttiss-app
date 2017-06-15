import React from 'react';
import {Link} from 'react-router-dom';

class Treatments extends React.Component {
    static _mapPropsToList(items) {
        if (items.length > 1) {
            return items.map((item,index) => <li key={index}>{item}</li>);
        }
        else {
            return (<li>{items[0]}</li>);
        }

    }

    static _if(title)
    {
        if(title)
        {
            return (<h3>{title}</h3>)
        }
    }

    render() {
        return (
            <div>
                <h2>Suggested Treatment and Actions</h2>
                {Treatments._if(this.props.above)}
                <ul>
                    {Treatments._mapPropsToList(this.props.treats)}
                </ul>
                {Treatments._if(this.props.below)}
                <hr/>
                <Link className="ui button secondary" to="/">Home</Link>
                <button className="ui button primary" onClick={this.props.history.goBack}>Back</button>
            </div>

        )
    }
}

export default Treatments;