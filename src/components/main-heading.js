import React from 'react';
import '../../public/styles/partials/main-heading.scss';

const MainHeading = () => {
    return (
        <div id="main-heading" className="col-center-8">
            <h1>Click Me More</h1>
            <h4>The point of this application is to manipulate the state of a clickable button that tracks it's clicks</h4>
        </div>
    )
}

export {MainHeading};