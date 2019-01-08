import React from 'react';
import '../../public/styles/partials/main-heading.scss';

const MainHeading = () => {
    return (
        <div id="main-heading" className="heading-grid">
            <h1>A Counting Application</h1>
            <p className="left">
                To increase the number value click or touch the Increase button. To decrease the value, click or touch the Decrease button.
            </p>
            <p className="left">
                To accumulate values using the current state of the counter, use the Accumulate button. This will begin update the state of the values running through the range generator.
            </p>
        </div>
    )
}

export {MainHeading};