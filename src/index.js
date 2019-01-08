import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { MainHeading } from './components/main-heading.js';
import { Provider } from 'react-redux';
import reducer from './components/reducers/reducer.js';
import CounterDisplay from './components/counter-display.js';
import '../public/styles/index.scss';

// console.log(store.dispatch({ type: 'INCREMENT' }));

const store = createStore(reducer);

const Main = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <MainHeading />
                <CounterDisplay />
            </div>
        </Provider>
    )
}

ReactDOM.render(<Main /> , document.getElementById('app'));
store.subscribe(Main);