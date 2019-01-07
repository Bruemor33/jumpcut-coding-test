import React from 'react';
import '../../public/styles/partials/main-heading.scss';

const HelloWorld = () => {
    return (
        <div id="main-heading" className="col-center-8">
            <h1>React Boiler Plate</h1>
            <h4>The bare bones for creating a react app with the option to use redux and tdd.</h4>
        </div>
    )
}

export {HelloWorld};