import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './components/index.js';
import {ContentOneSection} from './components/section-2';
import {Button} from './components/partials/button';
import '../public/styles/index.scss';

const Main = () => {
    return (
        <div className="container">
            <HelloWorld />
            <ContentOneSection />
            <Button />
        </div>
    )
}

ReactDOM.render(<Main /> , document.getElementById('app'));