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
                If you would like to increase or decrease(depending on if you start with a negative), use the Accumulate button.
            </p>
        </div>
    )
}

export {MainHeading};