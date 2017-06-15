import React from 'react';
import {Link} from 'react-router-dom';

class Timing extends React.Component {
    static _mapPropsToList(items) {
        if (items.length > 1) {
            return items.map((item,index) => <li key={index}>{item}</li>);
        }
        else {
            return (<li>{items[0]}</li>);
        }

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Usual Timing</h2>
                <p>{this.props.timing}</p>
                <h2>
                    Possible Etiology
                </h2>
                <ul>
                    {Timing._mapPropsToList(this.props.etio)}
                </ul>
                <hr/>
                <Link className="ui button secondary" to="/">Home</Link>
                <button className="ui button primary" onClick={this.props.history.goBack}>Back</button>
                <Link className="ui button primary" to={"/recommends/" + this.props.typeid}>Next</Link>
            </div>

        )
    }
}

export default Timing;