import React from 'react';
import {hot} from 'react-hot-loader/root';

import {ClassCounter} from './Counter';

function Main() {
    return (
        <div className="Main container">
            <h1>This is the Main component</h1>
            <div className="columns">
                <div className="column">
                    <ClassCounter />
                </div>
                <div className="column is-three-quarters"></div>
            </div>
        </div>
    );
}

export default hot(Main);
