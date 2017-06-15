import React from 'react';
import {Link} from 'react-router-dom';

class Recommends extends React.Component {
    static _mapPropsToList(items) {
        if (items.length > 1) {
            return items.map((item,index) => <li key={index}>{item}</li>);
        }
        else {
            return (<li>{items[0]}</li>);
        }

    }

    render() {
        return (
            <div>
                <h2>Recommended Investigations</h2>
                <ul>
                    {Recommends._mapPropsToList(this.props.recs)}
                </ul>
                <hr/>
                <Link className="ui button secondary" to="/">Home</Link>
                <button className="ui button primary" onClick={this.props.history.goBack}>Back</button>
                <Link className="ui button primary" to={"/treatment/" + this.props.typeid}>Next</Link>
            </div>

        )
    }
}

export default Recommends;