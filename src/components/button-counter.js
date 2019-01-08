import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../public/styles/partials/buttons.scss';

class Counter extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    accumulate = () => {
        this.props.dispatch({ type: 'ACCUMULATOR' });
    }

    render() {

        return (
            <div className="button-col-template">
                <div>
                    <button className="button-primary" onClick={this.increment}>Increase</button>
                    <button className="button-secondary" onClick={this.decrement}>Decrease</button>
                </div>
                <div className="optional-button">
                    <button className="button-accent" onClick={this.accumulate}>Accumulate</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);

