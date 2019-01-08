import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './button-counter.js';
import '../../public/styles/partials/count-display.scss';

class CounterDisplay extends Component {

    render() {
        
        return (
            <div id="count-display" className="count-display-grid">
                <h2>Count Value</h2>
                <h4>{ this.props.count }</h4>
                <h4>{ this.props.rangeGenerator }</h4>
                <div className="buttons-grid">
                    <Counter />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        rangeGenerator: state.rangeGenerator
    }
}

export default connect(mapStateToProps)(CounterDisplay);