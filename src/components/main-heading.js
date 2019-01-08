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
                The Accumulation button is interesting. It takes what the current state of the counter is and increments by 2. It also takes that state and enters it into a generator function. This generator then increments from that state by 1 for the amount of calls made within the click action, populating the second value area.
            </p>
        </div>
    )
}

export {MainHeading};