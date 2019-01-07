import React from 'react';
import ReactDOM from 'react-dom';
import {MainHeading} from './components/index.js';
import {ContentOneSection} from './components/section-2';
import {Button} from './components/partials/button';
import '../public/styles/index.scss';

const Main = () => {
    return (
        <div className="container">
            <MainHeading />
            <ContentOneSection />
            <Button />
        </div>
    )
}

ReactDOM.render(<Main /> , document.getElementById('app'));